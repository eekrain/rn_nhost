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
  isDisableLabel?: boolean;
  overrideErrorName?: string;
}
const RHTextInput = ({
  name,
  label,
  control,
  errors,
  placeholder,
  isDisableLabel,
  overrideErrorName,
  ...rest
}: IRHTextInputProps) => {
  return (
    <FormControl
      isInvalid={
        overrideErrorName ? overrideErrorName in errors : name in errors
      }>
      {!isDisableLabel ? <FormControl.Label>{label}</FormControl.Label> : null}
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
        {overrideErrorName
          ? errors[overrideErrorName]?.message
          : errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHTextInput;
