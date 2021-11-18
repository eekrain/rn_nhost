/* eslint-disable @typescript-eslint/no-unused-vars */
import {Input, IInputProps, FormControl, Text, HStack} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import numbro from 'numbro';
import {myNumberFormat} from '../../utils';

type TFormatNumberType = 'rp' | '-rp';

interface IRHNumberInputProps extends IInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  format?: TFormatNumberType;
}

const leftElement = (format?: TFormatNumberType) => {
  if (!format) return undefined;
  if (format === 'rp') {
    return (
      <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
        <Text color="white">Rp</Text>
      </HStack>
    );
  }
  if (format === '-rp') {
    return (
      <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
        <Text color="white">- Rp</Text>
      </HStack>
    );
  }
};

const numberFormat = (value: any, format?: TFormatNumberType) => {
  let processedVal: string;

  if (format) {
    let temp = numbro.unformat(value);
    temp = isNaN(temp) ? 0 : temp;
    processedVal = myNumberFormat.thousandSeparated(temp);
  } else {
    processedVal = value;
  }
  return processedVal;
};

const RHNumberInput = ({
  name,
  label,
  control,
  errors,
  format,
  placeholder,
  ...rest
}: IRHNumberInputProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <Input
              onChangeText={val => onChange(numberFormat(val, format))}
              placeholder={placeholder ? placeholder : label}
              value={typeof value !== 'string' ? value.toString() : value}
              InputLeftElement={leftElement(format)}
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

export default RHNumberInput;
