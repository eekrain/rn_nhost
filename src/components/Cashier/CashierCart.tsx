/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
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
import {Alert} from 'react-native';
import {useMyCart} from '../../state';
import {MyAvatar} from '../../shared/components';
import {myNumberFormat, useNhostAuth} from '../../shared/utils';
import Feather from 'react-native-vector-icons/Feather';
import {PAYMENT_METHOD, PaymentMethodEnum} from '../../shared/constants';
import PaymentTypeForm from './PaymentTypeForm';
import {useForm} from 'react-hook-form';
import {TRHNumberValueType} from '../../shared/components';
import {
  Transaction_Items,
  useCashier_CreateTransactionMutation,
} from '../../graphql/gql-generated';

export interface IDefaultValues {
  cash_in_amount: TRHNumberValueType;
}

const defaultValues: IDefaultValues = {
  cash_in_amount: {
    formattedValue: '',
    value: 0,
  },
};

interface Props {}

const CashierCart = ({}: Props) => {
  const myCart = useMyCart();
  const nhostAuth = useNhostAuth();
  const [isModalPayOpen, setModalPayOpen] = useState(false);
  const [formPayStep, setFormPayStep] = useState(0);
  const [paymentProcessResult, setPaymentProcessResult] = useState<{
    success: boolean;
    invoice_number: string | null;
  } | null>(null);
  const [loadingProcessPayment, setLoadingProcessPayment] = useState(false);

  const {
    watch,
    control,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
  });

  const cashInAmountForm = watch('cash_in_amount');

  const [createTransactionMutation, _createTransactionMutationResult] =
    useCashier_CreateTransactionMutation();

  const handleProcessPayment = async () => {
    setLoadingProcessPayment(true);
    if (
      myCart.payment_type === PaymentMethodEnum.cash &&
      (cashInAmountForm.value as number) < myCart.getTotalPrice()
    ) {
      Alert.alert(
        'Error',
        `Uang masuk sebesar ${myNumberFormat.rp(
          cashInAmountForm.value,
        )} lebih kecil dari jumlah yang harus dibayar sebesar ${myNumberFormat.rp(
          myCart.getTotalPrice(),
        )}.`,
      );
      setLoadingProcessPayment(false);
      return;
    }
    if (!myCart.payment_type) {
      console.error(
        '🚀 ~ file: CashierCart.tsx ~ line 83 ~ handleProcessPayment ~ myCart.payment_type is invalid',
        myCart.payment_type,
      );
      return;
    }
    console.log(
      '🚀 ~ file: CashierCart.tsx ~ line 58 ~ CashierCart ~ ANJIENNGG',
      cashInAmountForm,
    );

    console.log(
      '🚀 ~ file: CashierCart.tsx ~ line 88 ~ handleProcessPayment ~ myCart.cartItems',
      myCart.cartItems,
    );

    const transaction_items: Transaction_Items[] = myCart.cartItems.map(
      item => ({
        product_inventory_id: item.product_inventory_id,
        product_name: item.product_name,
        variant: item.variant,
        capital_price: item.capital_price,
        selling_price: item.selling_price,
        discount: item.discount,
        purchace_qty: item?.qty || 0,
        inventory_product_updated_at: item.inventory_product_updated_at,
        product_updated_at: item.product_updated_at,
      }),
    );
    console.log(
      '🚀 ~ file: CashierCart.tsx ~ line 103 ~ handleProcessPayment ~ transaction_items',
      transaction_items,
    );
    const tes = await createTransactionMutation({
      variables: {
        total_transaction: myCart.getTotalPrice(),
        payment_type: myCart.payment_type,
        user_id: nhostAuth.user.userId,
        transaction_items: transaction_items,
        cash_in_amount: cashInAmountForm.value as number,
      },
    }).catch(error => {
      console.error(
        '🚀 ~ file: CashierCart.tsx ~ line 123 ~ handleProcessPayment ~ error',
        error,
      );
    });
    console.log(
      '🚀 ~ file: CashierCart.tsx ~ line 95 ~ handleProcessPayment ~ tes',
      tes,
    );
    setLoadingProcessPayment(false);
  };

  return (
    <Box
      bgColor="white"
      w={['full', 'full', '2/6']}
      h={['container', 'container', '89%']}
      borderRadius="xl"
      p="4">
      <Modal isOpen={isModalPayOpen} size="xl">
        <Modal.Content>
          <Modal.Header>
            <HStack justifyContent="space-between">
              <IconButton
                icon={<Icon as={Feather} name="arrow-left" size="sm" />}
              />
              <Text fontSize="lg">Proses Pembayaran</Text>
              <Button
                isLoading={loadingProcessPayment}
                onPress={handleProcessPayment}
                variant="solid"
                isDisabled={!myCart.payment_type}>
                Bayar
              </Button>
            </HStack>
          </Modal.Header>
          <Box px="3" pt="3" pb="6">
            {formPayStep === 0 && (
              <PaymentTypeForm control={control} errors={errors} />
            )}
          </Box>
        </Modal.Content>
      </Modal>

      <Heading fontSize="xl" mb="4">
        Cart
      </Heading>

      <Box
        h={380}
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="gray.400"
        py="4">
        <ScrollView>
          {myCart.cartItems.map((item, index) => (
            <HStack
              py="3"
              key={item.product_inventory_id}
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth={1}
              borderColor="gray.200">
              <MyAvatar
                fallbackText={item.product_name}
                source={{uri: item.product_photo_url}}
                size={50}
              />
              <Box ml="4">
                <Text fontWeight="semibold" mb="2">
                  {item.product_name}
                </Text>
                <HStack space="3">
                  <IconButton
                    onPress={() => {
                      myCart.handleRemoveFromCart(item.product_inventory_id);
                    }}
                    size="sm"
                    variant="solid"
                    colorScheme="milano_red"
                    icon={<Icon as={Feather} name="minus" size="xs" />}
                  />

                  <Text>Qty : {item.qty}</Text>

                  <IconButton
                    onPress={() => {
                      myCart.handleAddToCart({
                        product_photo_url: item.product_photo_url,
                        product_inventory_id: item.product_inventory_id,
                        product_name: item.product_name,
                        variant: item.variant,
                        capital_price: item.capital_price,
                        selling_price: item.selling_price,
                        discount: item.discount,
                        available_qty: item.available_qty,
                        inventory_product_updated_at:
                          item.inventory_product_updated_at,
                        product_updated_at: item.product_updated_at,
                      });
                    }}
                    size="sm"
                    variant="solid"
                    icon={<Icon as={Feather} name="plus" size="xs" />}
                  />
                </HStack>
              </Box>
              <Box flex={1} alignItems="flex-end">
                <Text
                  color={item.discount === 0 ? 'green.700' : 'milano_red.500'}
                  strikeThrough={item.discount === 0 ? false : true}>
                  {myNumberFormat.rp(
                    item.qty
                      ? item.selling_price * item.qty
                      : item.selling_price,
                  )}
                </Text>
                {item.discount !== 0 && (
                  <Text color="green.700">
                    {myNumberFormat.rp(
                      item.qty
                        ? item.selling_price * item.qty -
                            (item.selling_price * item.qty * item.discount) /
                              100
                        : item.selling_price,
                    )}
                  </Text>
                )}
              </Box>
            </HStack>
          ))}
          {myCart.cartItems.length > 0 && (
            <Button
              onPress={() => myCart.clearCart()}
              bg="white"
              variant="outline"
              mt="4">
              Clear Cart
            </Button>
          )}
        </ScrollView>
      </Box>

      <Box mt="4">
        <HStack>
          <Heading fontSize="lg" w={120}>
            Total Item
          </Heading>
          <Heading fontSize="lg" w={4}>
            :
          </Heading>
          <Heading fontSize="lg">{myCart.getTotalItem()} item</Heading>
        </HStack>
        <HStack>
          <Heading fontSize="lg" w={120} color="green.700">
            Total Bayar
          </Heading>
          <Heading fontSize="lg" w={4} color="green.700">
            :
          </Heading>
          <Heading fontSize="lg" color="green.700">
            {myNumberFormat.rp(myCart.getTotalPrice())}
          </Heading>
        </HStack>
        <Button
          mt="6"
          onPress={() => {
            if (myCart.cartItems.length > 0) setModalPayOpen(true);
          }}>
          Bayar
        </Button>
      </Box>
    </Box>
  );
};

export default CashierCart;
