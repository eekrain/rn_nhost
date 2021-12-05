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
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

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
    const onDisplayNotification = async (
      remoteMessage: FirebaseMessagingTypes.RemoteMessage,
    ) => {
      console.log(
        '🚀 ~ file: App.tsx ~ line 82 ~ useEffect ~ remoteMessage',
        remoteMessage,
      );
      // Create a channel
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      // Display a notification
      await notifee.displayNotification({
        title: remoteMessage.notification?.title || 'Notification Title',
        body:
          remoteMessage.notification?.body ||
          'Main body content of the notification',
        android: {
          channelId,
          // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        },
      });
    };

    const unsubscribe = messaging().onMessage(onDisplayNotification);
    messaging().setBackgroundMessageHandler(onDisplayNotification);

    return unsubscribe;
  }, []);

  useEffect(() => {
    appPermission();
  }, []);

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
