import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type AppNavigationParamList = {
  Dashboard: undefined;
};

export type AppNavProps = DrawerScreenProps<AppNavigationParamList, any>;

export type DashboardNavProps = DrawerScreenProps<
  AppNavigationParamList,
  'Dashboard'
>;

export type AuthNavigationParamList = {
  SignIn: undefined;
  ForgotPassword: undefined;
};

export type SigninNavProps = StackScreenProps<
  AuthNavigationParamList,
  'SignIn'
>;
export type ForgotPasswordNavProps = StackScreenProps<
  AuthNavigationParamList,
  'ForgotPassword'
>;
