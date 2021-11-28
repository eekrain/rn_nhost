/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ISelectProps,
  FormControl,
  Checkbox,
  IBoxProps,
  Stack,
} from 'native-base';
import React, {useEffect} from 'react';
import {Control, Controller, useWatch} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';

interface ICheckboxOptions {
  value: string;
  label: string;
}

interface IRHCheckBoxProps extends ISelectProps {
  checkboxOptions: ICheckboxOptions[];
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'wrap-reverse';
  checkboxSpacing?: number;
  extendedOnChange?: (itemValue?: any) => void;
}

const RHCheckBox = ({
  checkboxOptions,
  name,
  label,
  control,
  errors,
  placeholder,
  checkboxSpacing,
  flexDirection = 'column',
  flexWrap,
  extendedOnChange,
  ...rest
}: IRHCheckBoxProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Checkbox.Group
            value={value}
            onChange={(itemValue: any) => {
              onChange(itemValue);
              // console.log('🚀 ~ file: index.tsx ~ line 55 ~ onChange');
              if (typeof extendedOnChange === 'function') {
                extendedOnChange(itemValue);
              }
            }}>
            <Stack
              direction={flexDirection}
              flexWrap={flexWrap}
              space={checkboxSpacing}>
              {checkboxOptions.map((opt, index) => (
                <Checkbox
                  key={`${opt.label}${opt.value}${index}`}
                  value={opt.value}>
                  {opt.label}
                </Checkbox>
              ))}
            </Stack>
          </Checkbox.Group>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHCheckBox;
