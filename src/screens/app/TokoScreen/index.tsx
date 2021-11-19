import React from 'react';
import {TokoRootNavProps} from '../index';
import TokoHome from '../../../components/Toko';
import CreateToko from '../../../components/Toko/CreateToko';
import UpdateToko from '../../../components/Toko/UpdateToko';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

export type TokoStackParamList = {
  ListToko: undefined;
  CreateToko: undefined;
  UpdateToko: {storeId: number};
};

type ITokoRoutes = {
  name: keyof TokoStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootTokoRoutes: ITokoRoutes[] = [
  {name: 'ListToko', component: TokoHome, routeNiceName: 'Toko'},
  {name: 'CreateToko', component: CreateToko, routeNiceName: 'Toko'},
  {name: 'UpdateToko', component: UpdateToko, routeNiceName: 'Toko'},
];

export type TokoRootStackNavProps = StackScreenProps<TokoStackParamList, any>;
export type ListTokoNavProps = StackScreenProps<TokoStackParamList, 'ListToko'>;
export type CreateTokoNavProps = StackScreenProps<
  TokoStackParamList,
  'CreateToko'
>;
export type UpdateTokoNavProps = StackScreenProps<
  TokoStackParamList,
  'UpdateToko'
>;

const TokoStack = createStackNavigator<TokoStackParamList>();

interface ITokoScreenProps extends TokoRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TokoScreen = (props: ITokoScreenProps) => {
  return (
    <TokoStack.Navigator screenOptions={{headerShown: false}}>
      {rootTokoRoutes.map(route => (
        <TokoStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </TokoStack.Navigator>
  );
};

export default TokoScreen;
