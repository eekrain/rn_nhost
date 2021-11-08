import {Input, IInputProps} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import {TRHMethod} from '../RHForm';

interface IRHInputProps extends IInputProps {
  name: string;
  method?: TRHMethod;
  children?: undefined;
  useMethod?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RHInput = ({name, method, useMethod = true, ...rest}: IRHInputProps) => {
  if (!method) {
    return (
      <View>
        <Text>Undefined</Text>
      </View>
    );
  }

  return (
    <Controller
      name={name}
      control={method.control}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          onBlur={onBlur}
          onChangeText={val => onChange(val)}
          value={value}
          {...rest}
        />
      )}
    />
  );
};

export default RHInput;
