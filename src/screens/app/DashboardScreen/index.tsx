import React from 'react';
import {View, Text} from 'native-base';
import {DashboardNavProps} from '../../../types/navigation';
import withAppLayout from '../../../components/Layout/AppLayout';

interface IDashboardScreenProps extends DashboardNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = (props: IDashboardScreenProps) => {
  return (
    <View>
      <Text>HAHAHAh</Text>
    </View>
  );
};

export default withAppLayout(DashboardScreen);
