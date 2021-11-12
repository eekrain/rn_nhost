/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NhostCustomProvider} from './src/shared/utils';
import MyNativeBaseProvider from './src/components/MyNativeBaseProvider';

const Render = () => (
  <MyNativeBaseProvider>
    <NhostCustomProvider>
      <App />
    </NhostCustomProvider>
  </MyNativeBaseProvider>
);

AppRegistry.registerComponent(appName, () => Render);
