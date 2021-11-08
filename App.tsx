/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/screens/auth';
import AppNavigation from './src/screens/app';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNhostAuth} from './src/shared/utils';
import {Box, Image, Spinner, VStack, Heading} from 'native-base';
import {useMemo} from 'react';

const App = () => {
  const nhostAuth = useNhostAuth();

  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);
  const loading = useMemo(
    () => nhostAuth.isLoading || loadingSplashScreen,
    [nhostAuth.isLoading, loadingSplashScreen],
  );

  useEffect(() => {
    const splash = setTimeout(() => {
      setLoadingSplashScreen(false);
    }, 1000);

    return () => {
      clearTimeout(splash);
    };
  });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {!loading && nhostAuth.isAuthenticated ? (
        <AppNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};
export default App;

const SplashScreen = () => {
  return (
    <Box
      safeArea
      flex={1}
      w="full"
      h="full"
      justifyContent="center"
      alignItems="center">
      <VStack justifyContent="center" alignItems="center" space="2">
        <Image
          source={require('./src/assets/images/logo.png')}
          alt="Logo Rocketjaket"
          w="xs"
          resizeMode="contain"
        />
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Loading...
        </Heading>
        <Spinner size="lg" accessibilityLabel="Loading" />
      </VStack>
    </Box>
  );
};
