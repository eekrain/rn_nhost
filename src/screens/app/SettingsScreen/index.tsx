import React from 'react';
import {SettingsRootNavProps} from '../index';
import TokoHome from '../../../components/Toko';
import CreateToko from '../../../components/Toko/CreateToko';
import UpdateToko from '../../../components/Toko/UpdateToko';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

export type SettingsStackParamList = {
  ListToko: undefined;
  CreateToko: undefined;
  UpdateToko: {storeId: number};
};

type ISettingsRoutes = {
  name: keyof SettingsStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootSettingsRoutes: ISettingsRoutes[] = [
  {name: 'ListToko', component: TokoHome, routeNiceName: 'Settings'},
  {name: 'CreateToko', component: CreateToko, routeNiceName: 'Toko'},
  {name: 'UpdateToko', component: UpdateToko, routeNiceName: 'Toko'},
];

export type SettingsRootStackNavProps = StackScreenProps<
  SettingsStackParamList,
  any
>;
export type SettingsHomeNavProps = StackScreenProps<
  SettingsStackParamList,
  'ListToko'
>;
export type CreateTokoNavProps = StackScreenProps<
  SettingsStackParamList,
  'CreateToko'
>;
export type UpdateTokoNavProps = StackScreenProps<
  SettingsStackParamList,
  'UpdateToko'
>;

const SettingsStack = createStackNavigator<SettingsStackParamList>();

interface ISettingsScreenProps extends SettingsRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingsScreen = (props: ISettingsScreenProps) => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      {rootSettingsRoutes.map(route => (
        <SettingsStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </SettingsStack.Navigator>
  );
};

export default SettingsScreen;
