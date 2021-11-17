/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Avatar,
  Button,
  Icon,
  useToast,
  Center,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {
  ListProdukNavProps,
  ProductStackParamList,
} from '../../screens/app/ProdukScreen';
import {useProduk_GetAllProdukQuery} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ButtonDelete, ButtonEdit} from '../Buttons';
import {
  generateAvatarName,
  getStorageFileUrlWImageTransform,
} from '../../shared/utils';
import numbro from 'numbro';

interface IActionProps {
  id: number;
  navigation: StackNavigationProp<ProductStackParamList, 'ListProduk'>;
  handleDeleteKategori: () => Promise<void>;
}

const Action = ({id, navigation, handleDeleteKategori}: IActionProps) => {
  return (
    <HStack space="3">
      <ButtonEdit
        size="sm"
        onPress={() => {
          navigation.navigate('UpdateKategoriProduk', {categoryId: id});
        }}
      />
      <ButtonDelete size="sm" onPress={() => handleDeleteKategori()} />
    </HStack>
  );
};

interface IProductPhotoProps {
  photo_url: string;
  product_name: string;
}

const ProductPhoto = ({photo_url, product_name}: IProductPhotoProps) => {
  return (
    <Avatar
      source={{
        uri: getStorageFileUrlWImageTransform({
          fileKey: photo_url,
          w: 100,
          q: 60,
        }),
      }}>
      {generateAvatarName(product_name)}
    </Avatar>
  );
};

interface Props extends ListProdukNavProps {}

const Produk = ({navigation}: Props) => {
  const getAllProduk = useProduk_GetAllProdukQuery();
  const toast = useToast();

  const data = useMemo(() => {
    const temp = getAllProduk.data?.rocketjaket_product || [];

    const withComponent = temp.map(produk => ({
      ...produk,
      capital_price: numbro(produk.capital_price).format({
        thousandSeparated: true,
        prefix: 'Rp ',
      }),
      selling_price: numbro(produk.selling_price).format({
        thousandSeparated: true,
        prefix: 'Rp ',
      }),
      discount: numbro(produk.discount).format({
        thousandSeparated: true,
        prefix: 'Rp ',
      }),
      category: produk.product_category.name,
      photo: (
        <ProductPhoto
          photo_url={produk?.photo_url ? produk.photo_url : ''}
          product_name={produk.name}
        />
      ),
      action: (
        <Action
          {...{
            id: produk.id,
            navigation,
          }}
          handleDeleteKategori={
            async () => {}
            // handleDeleteKategori(produk.id, produk.name)
          }
        />
      ),
    }));
    return withComponent;
  }, [getAllProduk.data?.rocketjaket_product, navigation]);

  return (
    <Box w="full">
      <HStack justifyContent="space-between" alignItems="center" mb="10">
        <Heading fontSize="xl">List Semua Produk Yang Ada</Heading>
        <Button
          onPress={() => navigation.navigate('CreateProduk')}
          size="lg"
          leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
          Buat Baru
        </Button>
      </HStack>

      <CustomTable
        data={data}
        headerHeight={90}
        rowHeight={70}
        columns={[
          {
            Header: 'Foto',
            accessor: 'photo',
            widthRatio: 1,
            isAvatar: true,
            isDisableSort: true,
          },
          {Header: 'Nama Produk', accessor: 'name', widthRatio: 2},
          {Header: 'Kategori Produk', accessor: 'category', widthRatio: 1},
          {Header: 'Harga Modal', accessor: 'capital_price', widthRatio: 1},
          {Header: 'Harga Jual', accessor: 'selling_price', widthRatio: 1},
          {Header: 'Diskon', accessor: 'discount', widthRatio: 1},
          {
            Header: 'Aksi',
            accessor: 'action',
            widthRatio: 1,
            isAction: true,
            isDisableSort: true,
          },
        ]}
      />
    </Box>
  );
};

export default Produk;
