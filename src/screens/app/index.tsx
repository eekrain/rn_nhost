import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import ProdukScreen, {rootProdukRoutes} from './ProdukScreen';
import TokoScreen, {rootTokoRoutes} from './TokoScreen';
import InventoryScreen, {rootInventoryRoutes} from './InventoryScreen';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type AppNavigationParamList = {
  Dashboard: undefined;
  ProdukRoot: undefined;
  TokoRoot: undefined;
  InventoryRoot: undefined;
};

type IAppRoutes = {
  name: keyof AppNavigationParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootAppRoutes: IAppRoutes[] = [
  {name: 'Dashboard', component: DashboardScreen, routeNiceName: 'Dashboard'},
  {name: 'TokoRoot', component: TokoScreen, routeNiceName: 'Toko'},
  {name: 'ProdukRoot', component: ProdukScreen, routeNiceName: 'Produk'},
  {
    name: 'InventoryRoot',
    component: InventoryScreen,
    routeNiceName: 'Inventory',
  },
];

export const allAppRoutes = [
  ...rootAppRoutes,
  ...rootTokoRoutes,
  ...rootProdukRoutes,
  ...rootInventoryRoutes,
];

export type AppNavProps = DrawerScreenProps<AppNavigationParamList, any>;

export type DashboardNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'Dashboard'
>;
export type ProdukRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'ProdukRoot'
>;
export type TokoRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'TokoRoot'
>;
export type InventoryRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'InventoryRoot'
>;

const AppDrawer = createDrawerNavigator<AppNavigationParamList>();

interface Props {}

const AppNavigation = ({}: Props) => {
  return (
    <AppDrawer.Navigator
      drawerContent={drawerProps => <CustomDrawerContent {...drawerProps} />}
      screenOptions={{headerShown: false}}>
      {rootAppRoutes.map(value => (
        <AppDrawer.Screen
          key={value.name}
          name={value.name}
          component={value.component}
        />
      ))}
    </AppDrawer.Navigator>
  );
};

export default AppNavigation;

export const getAppIcon = (screenName: keyof AppNavigationParamList) => {
  if (screenName === 'Dashboard') return 'bar-chart';
  if (screenName === 'ProdukRoot') return 'shopping-bag';
  if (screenName === 'TokoRoot') return 'home';
  if (screenName === 'InventoryRoot') return 'archive';
  return '';
};
