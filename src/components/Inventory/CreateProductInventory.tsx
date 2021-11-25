/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  useToast,
  Text,
  FormControl,
  Input,
} from 'native-base';
import {Platform} from 'react-native';
import {
  Inventory_GetAllInventoryProductByStorePkDocument,
  useInventory_CreateInventoryProductMutation,
  useProduk_GetProdukByPkQuery,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {getXHasuraContextHeader, myNumberFormat} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useFieldArray, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DismissKeyboardWrapper, RHNumberInput} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import withAppLayout from '../Layout/AppLayout';
import {CreateProductInventoryNavProps} from '../../screens/app/InventoryScreen';
import ProductSearch from './ProductSearch';
import ProductSelectVariation from './ProductSelectVariation';
import numbro from 'numbro';
import {useMyAppState} from '../../state';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export interface IProductInventoryDefaultValues {
  product_search_term: string;
  product_id: string | null;
  enabled_variations: string[];
  variation_values: {variation_title: string; variant_metadata_id?: number}[];
  override_capital_price: string;
  override_selling_price: string;
  override_discount: string;
  available_qty: string;
  min_available_qty: string;
}

const schema = yup
  .object({
    product_id: yup
      .string()
      .nullable()
      .required('Belum ada produk yang dipilih.'),
  })
  .required();

const defaultValues: IProductInventoryDefaultValues = {
  product_search_term: '',
  product_id: null,
  enabled_variations: [],
  variation_values: [],
  override_capital_price: '',
  override_selling_price: '',
  override_discount: '',
  available_qty: '0',
  min_available_qty: '0',
};

interface ICreateProductInventoryProps extends CreateProductInventoryNavProps {}

const CreateProductInventory = ({
  navigation,
  route,
}: ICreateProductInventoryProps) => {
  const toast = useToast();
  const myAppState = useMyAppState();
  const [isDataReady, setDataReady] = useState(false);

  const {
    watch,
    handleSubmit,
    control,
    setValue,
    formState: {errors},
    reset,
  } = useForm<IProductInventoryDefaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const selectedProductId = watch('product_id');
  const setSelectedProductId = (newProductId: string | null) => {
    setValue('product_id', newProductId);
  };

  const getProductData = useProduk_GetProdukByPkQuery({
    variables: {
      id: selectedProductId,
    },
  });

  useEffect(() => {
    if (!isDataReady) {
      myAppState.setLoadingWholePage(getProductData.loading);
      if (getProductData.data?.rocketjaket_product_by_pk) {
        myAppState.setLoadingWholePage(false);
        setDataReady(true);
      }
    }
  }, [
    getProductData.data?.rocketjaket_product_by_pk,
    getProductData.loading,
    isDataReady,
    myAppState,
  ]);

  const selectedProductData = useMemo(() => {
    return getProductData?.data?.rocketjaket_product_by_pk || null;
  }, [getProductData?.data?.rocketjaket_product_by_pk]);

  const [
    createInventoryProductMutation,
    _createInventoryProductMutationResult,
  ] = useInventory_CreateInventoryProductMutation({
    ...getXHasuraContextHeader({role: 'administrator'}),
    refetchQueries: [
      {query: Inventory_GetAllInventoryProductByStorePkDocument},
    ],
  });

  const handleSubmission = async (data: IProductInventoryDefaultValues) => {
    const inventoryProductVariants = data.enabled_variations
      .filter(enabled_variations_title => {
        const found = data.variation_values.find(fnd =>
          fnd.variation_title === enabled_variations_title &&
          fnd?.variant_metadata_id
            ? true
            : false,
        );
        if (found) return true;
        else return false;
      })
      .map(enabled_variations_title => {
        const found = data.variation_values.find(
          fnd => fnd.variation_title === enabled_variations_title,
        );
        return {inventory_variant_metadata_id: found!.variant_metadata_id!};
      });
    const price = {
      override_capital_price:
        data.override_capital_price === ''
          ? null
          : numbro.unformat(data.override_capital_price),
      override_selling_price:
        data.override_selling_price === ''
          ? null
          : numbro.unformat(data.override_selling_price),
      override_discount:
        data.override_discount === ''
          ? null
          : numbro.unformat(data.override_discount),
    };

    try {
      const res = await createInventoryProductMutation({
        variables: {
          inventory_product: {
            product_id: selectedProductId,
            override_capital_price: price.override_capital_price,
            override_selling_price: price.override_selling_price,
            override_discount: price.override_discount,
            store_id: route.params.storeId,
            available_qty: numbro.unformat(data.available_qty),
            min_available_qty: numbro.unformat(data.min_available_qty),
            inventory_product_variants: {
              data: inventoryProductVariants,
            },
          },
        },
      });

      if (res.errors) {
        toast.show({
          ...TOAST_TEMPLATE.error(
            `Gagal melakukan penambahan variasi produk dengan nama ${selectedProductData?.product_category.name} / ${selectedProductData?.name}.`,
          ),
        });
      } else {
        reset();
        toast.show({
          ...TOAST_TEMPLATE.success(
            `Berhasil menambahkan manajemen stok untuk produk ${selectedProductData?.product_category.name} / ${selectedProductData?.name}.`,
          ),
        });
        navigation.goBack();
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: CreateProductInventory.tsx ~ line 165 ~ handleSubmission ~ error',
        error,
      );
    }
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <DismissKeyboardWrapper>
        <Box pb="200">
          <Heading fontSize="xl" mb="10">
            Buat Inventory / Manajemen Stok Produk
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <FormControl isDisabled={true}>
                <FormControl.Label>Toko</FormControl.Label>
                <Input
                  placeholder="Enter password"
                  value={route.params.storeName}
                />
              </FormControl>
              <ProductSearch
                control={control}
                errors={errors}
                setSelectedProductId={setSelectedProductId}
              />
              <ProductSelectVariation
                control={control}
                errors={errors}
                setValue={setValue}
              />
              <RHNumberInput
                keyboardType="number-pad"
                control={control}
                errors={errors}
                label="Jumlah Tersedia"
                name="available_qty"
                format="thousandSeparated"
              />
              <RHNumberInput
                keyboardType="number-pad"
                control={control}
                errors={errors}
                label="Jumlah Minimal Tersedia"
                name="min_available_qty"
                description="Akan melakukan notifikasi apabila produk kurang dari jumlah minimal tersedia"
                format="thousandSeparated"
              />
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb="2">
                  Ganti Data Harga Default
                </Text>
                <Text w="4/5">
                  (*Opsional) Anda bisa merubah data harga default / bawaan dari
                  menu Produk khusus untuk 1 varian ini saja. Apabila tidak
                  ingin merubah data harga bawaan maka kosongkan saja.
                </Text>
              </Box>
              <RHNumberInput
                keyboardType="number-pad"
                name="override_capital_price"
                control={control}
                errors={errors}
                label="Ganti Harga Modal Untuk Varian Ini"
                placeholder={`Harga modal default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.capital_price || 0,
                )}.`}
                format="rp"
              />
              <RHNumberInput
                keyboardType="number-pad"
                name="override_selling_price"
                control={control}
                errors={errors}
                label="Ganti Harga Jual Untuk Varian Ini"
                placeholder={`Harga jual default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.selling_price || 0,
                )}.`}
                format="rp"
              />
              <RHNumberInput
                keyboardType="number-pad"
                name="override_discount"
                control={control}
                errors={errors}
                label="Ganti Diskon Untuk Varian Ini"
                placeholder={`Diskon default Rp ${myNumberFormat.thousandSeparated(
                  selectedProductData?.discount || 0,
                )}.`}
                format="-rp"
              />
              <HStack justifyContent="flex-end" mt="5" space="4">
                <ButtonSave
                  isLoading={_createInventoryProductMutationResult.loading}
                  onPress={handleSubmit(handleSubmission)}
                />
                <ButtonBack onPress={() => navigation.goBack()} />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </KeyboardAwareScrollView>
  );
};

export default withAppLayout(CreateProductInventory);
