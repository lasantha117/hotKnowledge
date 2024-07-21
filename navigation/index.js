// navigation/index.js

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Quiz from '../components/quiz/quiz';
import store from '../assets/redux/store';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      BottomTabs: {
        path: 'bottom',
        screens: {
          Home: 'home',
          Dashboard: 'dashboard',
          SwapPage: 'swap',
          Friends: 'friends',
          News: 'news',
        },
      },
      Quiz: 'quiz',
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
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
