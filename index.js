/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {myNotifeeActions, NhostCustomProvider} from './src/shared/utils';
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';
import notifee from '@notifee/react-native';

notifee.onBackgroundEvent(async event => {
  myNotifeeActions(event, 'background');
});

const Render = () => (
  <MyNativeBaseProvider>
    <NhostCustomProvider>
      <App />
    </NhostCustomProvider>
  </MyNativeBaseProvider>
);

AppRegistry.registerComponent(appName, () => Render);
