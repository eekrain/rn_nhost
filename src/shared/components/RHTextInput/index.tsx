import {Input, IInputProps, FormControl} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';

interface IRHTextInputProps extends IInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
}
const RHTextInput = ({
  name,
  label,
  control,
  errors,
  placeholder,
  ...rest
}: IRHTextInputProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => {
          return (
            <Input
              onChangeText={val => onChange(val)}
              value={value}
              placeholder={placeholder ? placeholder : label}
              {...rest}
            />
          );
        }}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHTextInput;
