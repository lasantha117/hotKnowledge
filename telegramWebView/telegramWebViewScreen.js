// screens/TelegramWebViewScreen.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TelegramWebView from './telegramWebView';

const TelegramWebViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TelegramWebView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TelegramWebViewScreen;
