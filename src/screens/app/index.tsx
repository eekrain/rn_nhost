import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import CashierScreen, {rootCashierRoutes} from './CashierScreen';
import ProfileScreen from './ProfileScreen';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import ProdukScreen, {rootProdukRoutes} from './ProdukScreen';
import SettingsScreen, {rootSettingsRoutes} from './SettingsScreen';
import InventoryScreen, {rootInventoryRoutes} from './InventoryScreen';
import UserScreen, {rootUserRoutes} from './UserScreen';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {TUserRoleOptions} from '../../types/user';

export type AppNavigationParamList = {
  Dashboard: undefined;
  Profile: undefined;
  ProdukRoot: undefined;
  SettingsRoot: undefined;
  InventoryRoot: undefined;
  UserRoot: undefined;
  CashierRoot: undefined;
};

export type IAppRoutes = {
  name: keyof AppNavigationParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
  isHideOnDrawer?: boolean;
  role: TUserRoleOptions[];
};

export const rootAppRoutes: IAppRoutes[] = [
  {
    name: 'CashierRoot',
    component: CashierScreen,
    routeNiceName: 'Kasir',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'Dashboard',
    component: DashboardScreen,
    routeNiceName: 'Dashboard',
    role: ['administrator'],
  },

  {
    name: 'Profile',
    component: ProfileScreen,
    routeNiceName: 'Profile',
    isHideOnDrawer: true,
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'ProdukRoot',
    component: ProdukScreen,
    routeNiceName: 'Produk',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'InventoryRoot',
    component: InventoryScreen,
    routeNiceName: 'Inventory',
    role: ['administrator', 'karyawan'],
  },
  {
    name: 'UserRoot',
    component: UserScreen,
    routeNiceName: 'Pengguna',
    role: ['administrator'],
  },
  {
    name: 'SettingsRoot',
    component: SettingsScreen,
    routeNiceName: 'Settings',
    role: ['administrator'],
  },
];

export const allAppRoutes = [
  ...rootAppRoutes,
  ...rootSettingsRoutes,
  ...rootProdukRoutes,
  ...rootInventoryRoutes,
  ...rootUserRoutes,
  ...rootCashierRoutes,
];

export type AppNavProps = DrawerScreenProps<AppNavigationParamList, any>;

export type DashboardNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'Dashboard'
>;
export type CashierRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'CashierRoot'
>;
export type ProfileNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'Profile'
>;
export type ProdukRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'ProdukRoot'
>;
export type SettingsRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'SettingsRoot'
>;
export type InventoryRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'InventoryRoot'
>;
export type UserRootNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'UserRoot'
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
  if (screenName === 'CashierRoot') return 'monitor';
  if (screenName === 'Dashboard') return 'bar-chart';
  if (screenName === 'Profile') return 'user';
  if (screenName === 'ProdukRoot') return 'shopping-bag';
  if (screenName === 'SettingsRoot') return 'settings';
  if (screenName === 'InventoryRoot') return 'archive';
  if (screenName === 'UserRoot') return 'user';
  return '';
};
