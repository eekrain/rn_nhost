/* eslint-disable @typescript-eslint/no-unused-vars */
import {Input, IInputProps, FormControl, View, Text} from 'native-base';
import React from 'react';
import {Control, FieldValues, useFormState, Controller} from 'react-hook-form';

interface IRHInputProps extends IInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
}

const RHInput = ({name, label, control, errors, ...rest}: IRHInputProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onChangeText={val => onChange(val)}
            value={value}
            onBlur={onBlur}
            {...rest}
          />
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHInput;
