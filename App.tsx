/* eslint-disable @typescript-eslint/no-unused-vars */
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

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/screens/auth';
import AppNavigation, {AppNavigationParamList} from './src/screens/app';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNhostAuth} from './src/shared/utils';
import {Alert, Linking} from 'react-native';
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
import notifee, {EventType} from '@notifee/react-native';
import {
  useUser_CreateOneUserFcmTokenMutation,
  useUser_GetAllUserFcmTokensByIdQuery,
} from './src/graphql/gql-generated';
import {getXHasuraContextHeader, myNotifeeActions} from './src/shared/utils';
import {useNavigationContainerRef} from '@react-navigation/native';

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

const linking: LinkingOptions<AppNavigationParamList> = {
  prefixes: ['myapp://'],
  config: {
    initialRouteName: 'Dashboard',
    screens: {
      InventoryRoot: 'inventory',
    },
  },
  subscribe(listener) {
    const onReceiveURL = ({url}: {url: string}) => listener(url);
    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);
    // Listen to firebase push notifications
    const unsubscribeNotification = notifee.onForegroundEvent(
      async notifeeEvent => {
        if (notifeeEvent.type === EventType.PRESS) {
          if (notifeeEvent.detail.notification?.data?.link) {
            listener(notifeeEvent.detail.notification?.data?.link);
          }
          if (notifeeEvent.detail.notification?.id) {
            notifee.cancelNotification(notifeeEvent.detail.notification?.id);
          }
        }
      },
    );

    notifee.onBackgroundEvent(async notifeeEvent => {
      console.log(
        '🚀 ~ file: App.tsx ~ line 120 ~ subscribe ~ notifeeEvent',
        notifeeEvent,
      );
      if (notifeeEvent.type === EventType.PRESS) {
        if (notifeeEvent.detail.notification?.data?.link) {
          listener(notifeeEvent.detail.notification?.data?.link);
        }
        if (notifeeEvent.detail.notification?.id) {
          notifee.cancelNotification(notifeeEvent.detail.notification?.id);
        }
      }
    });

    return () => {
      // Clean up the event listeners
      Linking.removeAllListeners('url');
      unsubscribeNotification();
    };
  },
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
    <NavigationContainer<AppNavigationParamList> linking={linking}>
      {!loading && nhostAuth.isAuthenticated ? (
        <>
          <MyNotifee />
          <AppNavigation />
        </>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};
export default App;

interface MyNotifeeProps {}

const MyNotifee = ({}: MyNotifeeProps) => {
  const navigation = useNavigationContainerRef<AppNavigationParamList>();
  const nhostAuth = useNhostAuth();

  const [bootstrapFcmDone, setBootstrapFcmDone] = useState(false);

  const getAllFcmUser = useUser_GetAllUserFcmTokensByIdQuery({
    variables: {
      user_id: nhostAuth.user.userId,
    },
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  const [createFcmToken] = useUser_CreateOneUserFcmTokenMutation({
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });

  useEffect(() => {
    const allFcmUser = getAllFcmUser.data?.users_fcm_token;

    const registerFcm = async () => {
      const token = await messaging().getToken();
      nhostAuth.updateFcmToken(token);

      const found = allFcmUser?.find(fcm => fcm.fcm_token === token);
      if (!found) {
        const res = await createFcmToken({
          variables: {
            insert_users_fcm_token: {
              fcm_token: token,
              user_id: nhostAuth.user.userId,
            },
          },
        });
        console.log('🚀 ~ file: index.tsx ~ line 161 ~ registerFcm ~ res', res);
      }
    };

    if (!bootstrapFcmDone && allFcmUser && nhostAuth?.user?.userId) {
      registerFcm();
      setBootstrapFcmDone(true);
    }
  }, [
    bootstrapFcmDone,
    createFcmToken,
    getAllFcmUser.data?.users_fcm_token,
    nhostAuth,
  ]);

  useEffect(() => {
    const onDisplayNotification = async (
      remoteMessage: FirebaseMessagingTypes.RemoteMessage,
      from: string,
    ) => {
      console.log(
        '🚀 ~ file: index.tsx ~ line 213 ~ useEffect ~ notificationFrom =>',
        from,
      );
      if (remoteMessage?.data?.notifee) {
        console.log(
          '🚀 ~ file: App.tsx ~ line 82 ~ useEffect ~ remoteMessage',
          JSON.parse(remoteMessage?.data?.notifee),
        );
      }
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      if (remoteMessage?.data?.notifee) {
        await notifee.displayNotification(
          JSON.parse(remoteMessage?.data?.notifee),
        );
      }
    };

    messaging().registerDeviceForRemoteMessages();
    const unsubscribe = messaging().onMessage(message =>
      onDisplayNotification(message, 'onMessage'),
    );
    messaging().setBackgroundMessageHandler(message =>
      onDisplayNotification(message, 'setBackgroundMessageHandler'),
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(notifeeEvent => {
      myNotifeeActions(notifeeEvent, 'foreground', navigation);
    });
  }, [navigation]);

  return null;
};
