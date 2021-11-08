import React from 'react';
import {Box, Heading, Image, VStack, FormControl, Button} from 'native-base';
import {ForgotPasswordNavProps} from '../../../types/navigation';
import RHForm from '../../../shared/components/RHForm';
import RHInput from '../../../shared/components/RHInput';

interface IForgotPasswordProps extends ForgotPasswordNavProps {}

interface IDefaultValues {
  username: string;
}

const defaultValues: IDefaultValues = {
  username: '',
};

const ForgotPassword = ({}: IForgotPasswordProps) => {
  const handleSubmit = (data: IDefaultValues) => {
    console.log(data);
  };

  return (
    <Box safeArea flex={1} p="2" py="8" w="md" mx="auto">
      <Box justifyContent="center" alignItems="center">
        <Image
          source={require('../../../assets/images/logo.png')}
          alt="Logo Rocketjaketr"
          w="xs"
          resizeMode="contain"
        />
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Kasir
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Masukkan Username
        </Heading>
      </Box>

      <RHForm defaultValues={defaultValues}>
        {method => (
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label
                _text={{
                  color: 'coolGray.800',
                  fontSize: 'xs',
                  fontWeight: 500,
                }}>
                Username
              </FormControl.Label>
              <RHInput name="username" />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              _text={{color: 'white'}}
              onPress={method.handleSubmit(handleSubmit)}>
              Reset Password
            </Button>
          </VStack>
        )}
      </RHForm>
    </Box>
  );
};

export default ForgotPassword;
