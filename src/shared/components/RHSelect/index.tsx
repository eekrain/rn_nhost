/* eslint-disable @typescript-eslint/no-unused-vars */
import {ISelectProps, FormControl, Select, Icon} from 'native-base';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';

interface ISelectOptions {
  value: string;
  label: string;
}

interface IRHSelectProps extends ISelectProps {
  selectOptions: ISelectOptions[];
  name: string;
  label: string;
  control: Control<any>;
  errors: {
    [x: string]: any;
  };
}

const RHSelect = ({
  selectOptions,
  name,
  label,
  control,
  errors,
  placeholder,
  ...rest
}: IRHSelectProps) => {
  return (
    <FormControl isInvalid={name in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Select
            placeholder={placeholder ? placeholder : label}
            selectedValue={value}
            width={150}
            onValueChange={itemValue => {
              onChange(itemValue);
            }}
            dropdownOpenIcon={<Icon as={Feather} name="chevron-up" size={6} />}
            dropdownCloseIcon={
              <Icon as={Feather} name="chevron-down" size={6} />
            }>
            {selectOptions.map(opt => (
              <Select.Item
                key={`${opt.label}${opt.value}`}
                label={opt.label}
                value={opt.value}
              />
            ))}
          </Select>
        )}
      />
      <FormControl.ErrorMessage>
        {errors[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default RHSelect;
