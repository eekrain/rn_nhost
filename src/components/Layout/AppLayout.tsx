import React from 'react';
import {AppNavProps} from '../../types/navigation';
import CustomHeader from '../CustomHeader';
import {Box} from 'native-base';

const withAppLayout = (Component: any) => {
  return (props: AppNavProps) => {
    return (
      <>
        <CustomHeader {...props} />
        <Box px="4" pt="4">
          <Component {...props} />
        </Box>
      </>
    );
  };
};
export default withAppLayout;
