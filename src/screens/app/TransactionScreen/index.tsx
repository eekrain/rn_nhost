import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import TransactionHome from '../../../components/Transaction';
import UpdateTransaction from '../../../components/Transaction/UpdateTransaction';

export type TransactionRootStackParamList = {
  ListTransaction: undefined;
  UpdateTransaction: {transaction_invoice_number: string};
};

type ITransactionRoutes = {
  name: keyof TransactionRootStackParamList;
  component: React.ComponentType<any>;
  routeNiceName: string;
};

export const rootTransactionRoutes: ITransactionRoutes[] = [
  {
    name: 'ListTransaction',
    component: TransactionHome,
    routeNiceName: 'List Transaksi',
  },
  {
    name: 'UpdateTransaction',
    component: UpdateTransaction,
    routeNiceName: 'Update Transaksi',
  },
];

export type TransactionRootStackNavProps = StackScreenProps<
  TransactionRootStackParamList,
  any
>;
export type ListTransactionNavProps = StackScreenProps<
  TransactionRootStackParamList,
  'ListTransaction'
>;
export type UpdateTransactionNavProps = StackScreenProps<
  TransactionRootStackParamList,
  'UpdateTransaction'
>;

const TransactionStack = createStackNavigator<TransactionRootStackParamList>();

interface Props {}

const TransactionScreen = ({}: Props) => {
  return (
    <TransactionStack.Navigator screenOptions={{headerShown: false}}>
      {rootTransactionRoutes.map(route => (
        <TransactionStack.Screen
          key={`${route.name}${route.routeNiceName}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </TransactionStack.Navigator>
  );
};

export default TransactionScreen;
