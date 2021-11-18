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
import {Alert} from 'react-native';
import {useMemo} from 'react';
import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import SplashScreen from './src/components/Overlay/Splashscreen';

const appPermission = async () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]).then(checkStatuses => {
    if (checkStatuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED) {
      Alert.alert(
        'Izin Kamera Terblokir',
        'Izin kamera untuk aplikasi ini telah diblokir. Aktifkan izin kamera untuk menggunakan aplikasi ini!',
      );
    }

    if (
      checkStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED ||
      checkStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] ===
        RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Izin Storage Terblokir',
        'Izin storage untuk aplikasi ini telah diblokir. Aktifkan izin storage untuk menggunakan aplikasi ini!',
      );
    }

    requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(_reqStatuses => {
      // console.log('Kamera', _reqStatuses[PERMISSIONS.ANDROID.CAMERA]);
      // console.log(
      //   'Storage write',
      //   _reqStatuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
      // );
      // console.log(
      //   'Storage read',
      //   _reqStatuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
      // );
    });
  });
};

const App = () => {
  const nhostAuth = useNhostAuth();

  useEffect(() => {
    appPermission();
  }, []);

  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);
  const loading = useMemo(
    () => nhostAuth.isLoading || loadingSplashScreen,
    [nhostAuth.isLoading, loadingSplashScreen],
  );
  // const loading = useMemo(
  //   () => nhostAuth.isLoading || loadingSplashScreen,
  //   [nhostAuth.isLoading, loadingSplashScreen],
  // );

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

// const SplashScreen = () => {
//   return (
//     <Box
//       safeArea
//       flex={1}
//       w="full"
//       h="full"
//       justifyContent="center"
//       alignItems="center">
//       <VStack justifyContent="center" alignItems="center" space="2">
//         <Image
//           source={require('./src/assets/images/logo.png')}
//           alt="Logo Rocketjaket"
//           w="xs"
//           resizeMode="contain"
//         />
//         <Heading size="lg" fontWeight="600" color="coolGray.800">
//           Loading...
//         </Heading>
//         <Spinner size="lg" accessibilityLabel="Loading" />
//       </VStack>
//     </Box>
//   );
// };
