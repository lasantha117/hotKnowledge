// navigation/BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { RiHomeLine, RiDashboardLine, RiExchangeLine, RiGroupLine } from '@remixicon/react';
import store from '../assets/redux/store';
import Home from '../components/home/home';
import Dashboard from '../components/dashbord';
import SwapPage from '../components/swapPage/swapPage';
import Friends from '../components/Friends/friends';
import Colors from '../constants/Colors';
import styles from './bottomNavStyles';
import News from '../components/News';
import { Provider } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}> {/* Wrap the navigator with the Provider */}
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarStyle: styles.tabBarContainer,
          tabBarIcon: ({ color, size }) => {
            let IconComponent;

            if (route.name === 'Home') {
              IconComponent = RiHomeLine;
            } else if (route.name === 'Dashboard') {
              IconComponent = RiDashboardLine;
            } else if (route.name === 'SwapPage') {
              IconComponent = RiExchangeLine;
            } else if (route.name === 'Friends') {
              IconComponent = RiGroupLine;
            } else if (route.name === 'News') {
              IconComponent = RiGroupLine;
            }

            return <IconComponent size={size} color={color} style={styles.tabBarIcon} />;
          },
          headerShown: false, // Ensure the header is not shown
        })}
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Dashboard" component={Dashboard} />
        <BottomTab.Screen name="SwapPage" component={SwapPage} />
        <BottomTab.Screen name="Friends" component={Friends} />
        <BottomTab.Screen name="News" component={News} />
      </BottomTab.Navigator>
    </Provider>
  );
};

export default BottomTabNavigator;
