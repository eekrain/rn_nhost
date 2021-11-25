import React from 'react';
import {InventoryRootNavProps} from '../index';
import InventoryHome from '../../../components/Inventory';
import CreateProductVariants from '../../../components/Inventory/CreateProductVariants';
import UpdateProductVariants from '../../../components/Inventory/UpdateProductVariants';
import CreateProductInventory from '../../../components/Inventory/CreateProductInventory';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

export type InventoryRootStackParamList = {
  InventoryHome: undefined;
  CreateProductVariants: undefined;
  UpdateProductVariants: {variant_title: string};
  CreateProductInventory: {storeId: number; storeName: string};
};

type ITokoRoutes = {
  name: keyof InventoryRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootInventoryRoutes: ITokoRoutes[] = [
  {name: 'InventoryHome', component: InventoryHome, routeNiceName: 'Inventory'},
  {
    name: 'CreateProductVariants',
    component: CreateProductVariants,
    routeNiceName: 'Inventory / Variasi Produk',
  },
  {
    name: 'UpdateProductVariants',
    component: UpdateProductVariants,
    routeNiceName: 'Inventory / Variasi Produk',
  },
  {
    name: 'CreateProductInventory',
    component: CreateProductInventory,
    routeNiceName: 'Inventory / Variasi Produk',
  },
];

export type InventoryRootStackNavProps = StackScreenProps<
  InventoryRootStackParamList,
  any
>;
export type InventoryHomeNavProps = StackScreenProps<
  InventoryRootStackParamList,
  'InventoryHome'
>;
export type CreateProductVariantsNavProps = StackScreenProps<
  InventoryRootStackParamList,
  'CreateProductVariants'
>;
export type UpdateProductVariantsNavProps = StackScreenProps<
  InventoryRootStackParamList,
  'UpdateProductVariants'
>;
export type CreateProductInventoryNavProps = StackScreenProps<
  InventoryRootStackParamList,
  'CreateProductInventory'
>;

const TokoStack = createStackNavigator<InventoryRootStackParamList>();

interface IInventoryScreenProps extends InventoryRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InventoryScreen = (props: IInventoryScreenProps) => {
  return (
    <TokoStack.Navigator screenOptions={{headerShown: false}}>
      {rootInventoryRoutes.map(route => (
        <TokoStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </TokoStack.Navigator>
  );
};

export default InventoryScreen;
