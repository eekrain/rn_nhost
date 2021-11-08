import React from 'react';
import {View, Text} from 'react-native';
import {withHeader} from '../../../components/CustomHeader';
import {DashboardNavProps} from '../../../types/navigation';

interface IDashboardScreenProps extends DashboardNavProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardScreen = (props: IDashboardScreenProps) => {
  return (
    <View>
      <Text>HALO NJING</Text>
    </View>
  );
};

export default withHeader(DashboardScreen);
