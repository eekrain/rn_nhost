import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import ProdukIndex from '../../../components/Produk';
import CreateKategoriProduk from '../../../components/Produk/CreateKategoriProduk';
import UpdateKategoriProduk from '../../../components/Produk/UpdateKategoriProduk';

export type ProductStackParamList = {
  ListProduk: undefined;
  CreateKategoriProduk: undefined;
  UpdateKategoriProduk: {categoryId: number};
};

type IProdukRoutes = {
  name: keyof ProductStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootProdukRoutes: IProdukRoutes[] = [
  {name: 'ListProduk', component: ProdukIndex, routeNiceName: 'List Produk'},
  {
    name: 'CreateKategoriProduk',
    component: CreateKategoriProduk,
    routeNiceName: 'Kategori Produk',
  },
  {
    name: 'UpdateKategoriProduk',
    component: UpdateKategoriProduk,
    routeNiceName: 'Kategori Produk',
  },
];

export type ProdukRootStackNavProps = StackScreenProps<
  ProductStackParamList,
  any
>;
export type ListProdukNavProps = StackScreenProps<
  ProductStackParamList,
  'ListProduk'
>;
export type CreateKategoriProdukNavProps = StackScreenProps<
  ProductStackParamList,
  'CreateKategoriProduk'
>;
export type UpdateKategoriProdukNavProps = StackScreenProps<
  ProductStackParamList,
  'UpdateKategoriProduk'
>;

const ProdukStack = createStackNavigator<ProductStackParamList>();

interface Props {}

const ProdukScreen = ({}: Props) => {
  return (
    <ProdukStack.Navigator screenOptions={{headerShown: false}}>
      {rootProdukRoutes.map(route => (
        <ProdukStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </ProdukStack.Navigator>
  );
};

export default ProdukScreen;
