// navigation/index.js

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeader from '../components/header/CustomHeader';
import BottomTabNavigator from './BottomTabNavigator';
import Quiz from '../components/quiz/quiz';
import TelegramWebViewScreen from '../TelegramWebView/telegramWebViewScreen';
import store from '../assets/redux/store';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      BottomTabs: 'bottom',
      Quiz: 'quiz',
      TelegramWebViewScreen : 'telegram', // Add the new screen to the linking configuration
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="TelegramWebView" component={TelegramWebViewScreen} /> 
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
