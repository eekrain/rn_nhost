/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  Center,
  ScrollView,
  Heading,
  HStack,
  VStack,
  Button,
  IconButton,
  Icon,
  Modal,
} from 'native-base';
import {useMyCart} from '../../state';
import {MyAvatar} from '../../shared/components';
import {myNumberFormat} from '../../shared/utils';
import Feather from 'react-native-vector-icons/Feather';
import {PAYMENT_METHOD, PaymentMethodEnum} from '../../shared/constants';
import {string} from 'yup';
import {Control, useForm} from 'react-hook-form';
import {RHNumberInput, DismissKeyboardWrapper} from '../../shared/components';
import {IDefaultValues} from './CashierCart';

interface Props {
  control: Control<IDefaultValues, object>;
  errors: any;
}

const PaymentTypeForm = ({control, errors}: Props) => {
  const myCart = useMyCart();

  return (
    <DismissKeyboardWrapper>
      <Box>
        <Center>
          <Heading fontSize="lg">Total</Heading>
          <Heading fontSize="lg" color="green.700">
            {myNumberFormat.rp(myCart.getTotalPrice())}
          </Heading>
        </Center>
        <HStack mt="8" alignItems="center">
          <Text fontSize="lg" w={100}>
            Cash
          </Text>
          <VStack space="4" flex={1}>
            <Box w="30%">
              <Button
                onPress={() => myCart.setPaymentType(PaymentMethodEnum.cash)}
                variant={
                  myCart.payment_type === PaymentMethodEnum.cash
                    ? 'solid'
                    : 'outline'
                }
                bg={
                  myCart.payment_type === PaymentMethodEnum.cash
                    ? undefined
                    : 'white'
                }
                leftIcon={<Icon as={Feather} name="dollar-sign" size="sm" />}>
                Cash
              </Button>
            </Box>
            {myCart.payment_type === PaymentMethodEnum.cash && (
              <RHNumberInput
                keyboardType="number-pad"
                name="cash_in_amount"
                control={control}
                errors={errors}
                label="Uang Masuk"
                format="rp"
              />
            )}
          </VStack>
        </HStack>
        <HStack mt="6" alignItems="center">
          <Text fontSize="lg" w={100}>
            EDC
          </Text>
          <HStack
            space="4"
            flex={1}
            flexWrap="wrap"
            justifyContent="space-between">
            {PAYMENT_METHOD.edc.map(opt => (
              <Button
                onPress={() => {
                  myCart.setPaymentType(opt.payment_type);
                }}
                key={opt.payment_type}
                w="30%"
                variant={
                  myCart.payment_type === opt.payment_type ? 'solid' : 'outline'
                }
                bg={
                  myCart.payment_type === opt.payment_type ? undefined : 'white'
                }>
                {opt.title}
              </Button>
            ))}
          </HStack>
        </HStack>
        <HStack mt="6" alignItems="center">
          <Text fontSize="lg" w={100}>
            E-Wallet
          </Text>
          <HStack
            space="4"
            flex={1}
            flexWrap="wrap"
            justifyContent="space-between">
            {PAYMENT_METHOD.ewallet.map(opt => (
              <Button
                onPress={() => {
                  myCart.setPaymentType(opt.payment_type);
                }}
                key={opt.payment_type}
                w="30%"
                variant={
                  myCart.payment_type === opt.payment_type ? 'solid' : 'outline'
                }
                bg={
                  myCart.payment_type === opt.payment_type ? undefined : 'white'
                }>
                {opt.title}
              </Button>
            ))}
          </HStack>
        </HStack>
      </Box>
    </DismissKeyboardWrapper>
  );
};

export default PaymentTypeForm;
