import React from 'react';
import {
  Box,
  Heading,
  Image,
  VStack,
  FormControl,
  Link,
  Button,
} from 'native-base';
import {SigninNavProps} from '../../../types/navigation';
import RHForm from '../../../shared/components/RHForm';
import RHInput from '../../../shared/components/RHInput';
import {useNhostAuth} from '../../../shared/utils/nhost';

interface ISignInScreenProps extends SigninNavProps {}

interface IDefaultValues {
  username: string;
  password: string;
}

const defaultValues = {
  username: 'ardianoption@gmail.com',
  password: 'ardianeka',
};

const SignInScreen = ({navigation}: ISignInScreenProps) => {
  const nhostAuth = useNhostAuth();
  const handleSubmit = async (data: IDefaultValues) => {
    await nhostAuth.signIn(data.username, data.password).catch(err => {
      console.error('🚀 ~ file: index.tsx ~ line 34 ~ handleSubmit ~ err', err);
    });
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
          Selamat Datang!
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
            <FormControl>
              <FormControl.Label
                _text={{
                  color: 'coolGray.800',
                  fontSize: 'xs',
                  fontWeight: 500,
                }}>
                Password
              </FormControl.Label>
              <RHInput type="password" name="password" useMethod={true} />
              <Link
                onTouchEnd={() => navigation.navigate('ForgotPassword')}
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              _text={{color: 'white'}}
              onPress={method.handleSubmit(handleSubmit)}>
              Sign in
            </Button>
          </VStack>
        )}
      </RHForm>
    </Box>
  );
};

export default SignInScreen;
