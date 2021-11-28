import React from 'react';
import {UserRootNavProps} from '../index';
import UsersHome from '../../../components/Users';
import CreateUser from '../../../components/Users/CreateUser';
import UpdateUser from '../../../components/Users/UpdateUser';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

export type UserRootStackParamList = {
  ListUser: undefined;
  CreateUser: undefined;
  UpdateUser: {userId: string};
};

type ITokoRoutes = {
  name: keyof UserRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootUserRoutes: ITokoRoutes[] = [
  {name: 'ListUser', component: UsersHome, routeNiceName: 'Pengguna'},
  {name: 'CreateUser', component: CreateUser, routeNiceName: 'Pengguna'},
  {name: 'UpdateUser', component: UpdateUser, routeNiceName: 'Pengguna'},
];

export type UserRootStackNavProps = StackScreenProps<
  UserRootStackParamList,
  any
>;
export type ListUserNavProps = StackScreenProps<
  UserRootStackParamList,
  'ListUser'
>;
export type CreateUserNavProps = StackScreenProps<
  UserRootStackParamList,
  'CreateUser'
>;
export type UpdateUserNavProps = StackScreenProps<
  UserRootStackParamList,
  'UpdateUser'
>;
// export type UpdateTokoNavProps = StackScreenProps<
//   TokoStackParamList,
//   'UpdateToko'
// >;

const TokoStack = createStackNavigator<UserRootStackParamList>();

interface IUserScreenProps extends UserRootNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserScreen = (props: IUserScreenProps) => {
  return (
    <TokoStack.Navigator screenOptions={{headerShown: false}}>
      {rootUserRoutes.map(route => (
        <TokoStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </TokoStack.Navigator>
  );
};

export default UserScreen;
