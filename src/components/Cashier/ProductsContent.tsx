/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Box,
  Text,
  Stack,
  HStack,
  Pressable,
  Icon,
  ScrollView,
  Heading,
  Button,
  VStack,
  Center,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  getStorageFileUrlWImageTransform,
  myNumberFormat,
  useNhostAuth,
} from '../../shared/utils';
import {UserRolesEnum} from '../../types/user';
import {Control, UseFormSetValue} from 'react-hook-form';
import {MyAvatar, RHTextInput} from '../../shared/components';
import {IDefaultValues, IInventoryProductData} from '.';

interface Props {
  searchTerm: string;
  setValue: UseFormSetValue<IDefaultValues>;
  dataStoreActive:
    | {
        __typename?: 'rocketjaket_store' | undefined;
        id: number;
        name: string;
        latitude?: string | null | undefined;
        longitude?: string | null | undefined;
        address?: string | null | undefined;
        created_at: any;
        updated_at: any;
      }
    | null
    | undefined;
  control: Control<IDefaultValues, object>;
  errors: any;
  kategoriProdukTab: {
    value: number | null;
    label: string;
  }[];
  activeCategory: number | null;
  filteredByCategoryProductData: IInventoryProductData[];
  searchedInventoryProductData: IInventoryProductData[];
}

const ProductsContent = ({
  setValue,
  searchTerm,
  dataStoreActive,
  control,
  errors,
  kategoriProdukTab,
  activeCategory,
  filteredByCategoryProductData,
  searchedInventoryProductData,
}: Props) => {
  const nhostAuth = useNhostAuth();
  return (
    <ScrollView w={['full', 'full', '4/6']}>
      <Stack w="full" direction="column" space="3" pb="100">
        <HStack space="4" alignItems="center">
          <Heading fontSize="xl">Toko {dataStoreActive?.name}</Heading>
          {nhostAuth?.user?.role === UserRolesEnum.administrator && (
            <Button
              onPress={() => setValue('show_modal_change_toko', true)}
              size="sm"
              leftIcon={<Icon as={FeatherIcon} name="home" size="xs" />}>
              Ganti Toko
            </Button>
          )}
        </HStack>

        <Box bgColor="white" borderRadius="lg">
          <RHTextInput
            control={control}
            errors={errors}
            label="Search..."
            isDisableLabel={true}
            name="search_term"
            InputLeftElement={
              <Icon
                as={<FeatherIcon name="search" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
        </Box>
        {!searchTerm && (
          <HStack>
            <ScrollView horizontal={true} nestedScrollEnabled={true}>
              {kategoriProdukTab.map((cat, i) => {
                const borderColor =
                  activeCategory === cat.value ? 'scarlet.400' : 'coolGray.200';

                return (
                  <Pressable
                    key={`${cat.value}${cat.label}`}
                    borderBottomWidth="3"
                    borderColor={borderColor}
                    alignItems="center"
                    px="3"
                    pb="2"
                    cursor="pointer"
                    onPress={() => {
                      console.log(i);
                      setValue('active_category', i === 0 ? null : cat.value);
                    }}>
                    <Text>{cat.label}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </HStack>
        )}
        <HStack flexWrap="wrap" w="full" justifyContent="space-evenly" mt="2">
          {!searchTerm
            ? filteredByCategoryProductData.map(product => productItem(product))
            : searchedInventoryProductData.map(product => productItem(product))}
        </HStack>
      </Stack>
    </ScrollView>
  );
};

export default ProductsContent;

const productItem = (product: IInventoryProductData) => {
  return (
    <Box w="32%" bgColor="white" borderRadius={10} mb="4" key={product.id}>
      <MyAvatar
        fallbackText={product.product_name}
        source={{
          uri: product.product_photo_url,
        }}
        height={150}
        width="100%"
        borderTopRadius={10}
        fontSize="4xl"
        topRightElement={
          product.discount !== 0 ? (
            <Box
              bgColor="white"
              py="2"
              px="12"
              shadow="9"
              style={{
                transform: [
                  {rotate: '45deg'},
                  {translateX: 35},
                  {translateY: -20},
                ],
              }}>
              <Text fontWeight="bold" fontSize="md" color="milano_red.500">
                {myNumberFormat.percentageDiscount(product.discount)}
              </Text>
            </Box>
          ) : undefined
        }
      />
      <Box px="4" py="2">
        <Center>
          <Text fontWeight="bold" fontSize="md">
            {product.product_name}
          </Text>
          <Text mt="2">{product.product_category}</Text>
          <Text>{product.variant}</Text>
          <Text>Tersedia: {product.available_qty}</Text>
          <Text fontWeight="semibold" color="green.700">
            {myNumberFormat.rp(product.selling_price)}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
