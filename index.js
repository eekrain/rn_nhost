/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';
import {NhostCustomProvider} from './src/shared/utils';

const Render = () => (
  <NativeBaseProvider>
    <NhostCustomProvider>
      <App />
    </NhostCustomProvider>
  </NativeBaseProvider>
);

AppRegistry.registerComponent(appName, () => Render);
