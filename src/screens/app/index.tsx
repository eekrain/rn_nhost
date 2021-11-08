import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import {AppNavigationParamList} from '../../types/navigation';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const AppDrawer = createDrawerNavigator<AppNavigationParamList>();

interface Props {}

const AppNavigation = ({}: Props) => {
  return (
    <AppDrawer.Navigator
      drawerContent={drawerProps => <CustomDrawerContent {...drawerProps} />}
      screenOptions={{headerShown: false}}>
      <AppDrawer.Screen name="Dashboard" component={DashboardScreen} />
    </AppDrawer.Navigator>
  );
};

export default AppNavigation;

export const getAppIcon = (
  screenName: keyof AppNavigationParamList | string,
): string | undefined => {
  switch (screenName) {
    case 'Dashboard':
      return 'bar-chart';
    default:
      return undefined;
  }
};
