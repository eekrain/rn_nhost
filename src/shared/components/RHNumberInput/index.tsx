/* eslint-disable @typescript-eslint/no-unused-vars */
import {Input, IInputProps, FormControl, Text, HStack} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import numbro from 'numbro';
import {myNumberFormat} from '../../utils';

type TFormatNumberType =
  | 'rp'
  | '-rp'
  | 'thousandSeparated'
  | 'discountPercentage';

interface IRHNumberInputProps extends IInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  format?: TFormatNumberType;
  description?: string;
  isDisableEmptyToZero?: boolean;
  minimumIntValue?: number;
  maximumIntValue?: number;
}

const leftElement = (format?: TFormatNumberType) => {
  if (!format) return undefined;
  if (format === 'thousandSeparated') return undefined;
  else if (format === 'discountPercentage') {
    return (
      <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
        <Text color="white" fontWeight="semibold">
          - %
        </Text>
      </HStack>
    );
  } else if (format === 'rp') {
    return (
      <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
        <Text color="white">Rp</Text>
      </HStack>
    );
  } else if (format === '-rp') {
    return (
      <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
        <Text color="white">- Rp</Text>
      </HStack>
    );
  }
};

const numberFormat = (
  value: any,
  isDisableEmptyToZero?: boolean,
  minimumIntValue?: number,
  maximumIntValue?: number,
  format?: TFormatNumberType,
) => {
  let processedVal: string;

  if (format) {
    let temp = numbro.unformat(value);
    temp = isNaN(temp) ? 0 : temp;
    if (minimumIntValue) {
      temp = temp < minimumIntValue ? minimumIntValue : temp;
    }
    if (maximumIntValue) {
      temp = temp > maximumIntValue ? maximumIntValue : temp;
    }
    processedVal =
      isDisableEmptyToZero && temp === 0
        ? ''
        : myNumberFormat.thousandSeparated(temp);
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
  description,
  minimumIntValue,
  maximumIntValue,
  isDisableEmptyToZero,
  ...rest
}: IRHNumberInputProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      {description ? <Text mb="2">{description}</Text> : null}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <Input
              onChangeText={val =>
                onChange(
                  numberFormat(
                    val,
                    isDisableEmptyToZero,
                    format === 'discountPercentage' ? 0 : minimumIntValue,
                    format === 'discountPercentage' ? 100 : maximumIntValue,
                    format,
                  ),
                )
              }
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
