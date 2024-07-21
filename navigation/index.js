// navigation/index.js

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import store from '../assets/redux/store';

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      BottomTabs: 'bottom',
      Quiz: 'quiz',
      TelegramWebViewScreen: 'telegram',
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
