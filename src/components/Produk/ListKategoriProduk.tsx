import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Button,
  Icon,
  Center,
  ScrollView,
  useToast,
} from 'native-base';
import {Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  ListProdukNavProps,
  ProductStackParamList,
} from '../../screens/app/ProdukScreen';
import {
  useProduk_GetAllKategoriProdukQuery,
  useProduk_DeleteKategoriProdukMutation,
} from '../../graphql/gql-generated';
import CustomTable from '../CustomTable';
import {useMemo} from 'react';
import {ButtonEdit, ButtonDelete} from '../Buttons';
import {StackNavigationProp} from '@react-navigation/stack';
import {TOAST_TEMPLATE} from '../../shared/constants';

interface ActionProps {
  id: number;
  navigation: StackNavigationProp<ProductStackParamList, 'ListProduk'>;
  handleDeleteKategori: () => Promise<void>;
}

const Action = ({id, navigation, handleDeleteKategori}: ActionProps) => {
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

interface Props extends ListProdukNavProps {}

const KategoriProduk = ({navigation}: Props) => {
  const getAllProduk = useProduk_GetAllKategoriProdukQuery();
  const toast = useToast();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deleteKategoriMutation, _deleteKategoriMutationResult] =
    useProduk_DeleteKategoriProdukMutation();

  const data = useMemo(() => {
    const handleDeleteKategori = async (id: number, name: string) => {
      const mutation = async () => {
        const res = await deleteKategoriMutation({variables: {id}});
        if (res.errors) {
          toast.show({
            ...TOAST_TEMPLATE.error(`Delete kategori produk ${name} gagal.`),
          });
        } else {
          toast.show({
            ...TOAST_TEMPLATE.success(
              `Delete kategori produk ${name} berhasil.`,
            ),
          });
        }
      };
      Alert.alert(
        'Hapus Kategori Produk',
        `Kategori produk ${name} akan dihapus. Lanjutkan?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            onPress: () => mutation(),
            text: 'Hapus',
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    };
    const temp = getAllProduk.data?.rocketjaket_product_category || [];

    const withAction = temp.map(val => ({
      ...val,
      component: (
        <Action
          {...{
            id: val.id,
            navigation,
          }}
          handleDeleteKategori={() => handleDeleteKategori(val.id, val.name)}
        />
      ),
    }));

    return withAction;
  }, [
    deleteKategoriMutation,
    getAllProduk.data?.rocketjaket_product_category,
    navigation,
    toast,
  ]);

  return (
    <Box>
      <HStack justifyContent="space-between" alignItems="center" mb="10">
        <Heading fontSize="xl">List Semua Kategori Produk</Heading>
        <Button
          onPress={() => {
            navigation.navigate('CreateKategoriProduk');
          }}
          size="lg"
          leftIcon={<Icon as={Feather} name="plus-square" size="sm" />}>
          Buat Baru
        </Button>
      </HStack>
      <Center>
        <ScrollView nestedScrollEnabled={true}>
          <CustomTable
            data={data}
            columns={[
              {Header: 'Nama Kategori', accessor: 'name', width: 300},
              {Header: 'Deskripsi', accessor: 'description', width: 300},
              {Header: 'Aksi', accessor: 'component', width: 100},
            ]}
          />
        </ScrollView>
      </Center>
    </Box>
  );
};

export default KategoriProduk;
