// components/TelegramWebView.js

import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, Alert } from 'react-native';

const TelegramWebView = () => {
  const webViewRef = useRef(null);

  const telegramBotScript = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>
        <script type="text/javascript">
          document.addEventListener("DOMContentLoaded", function() {
            // Check if Telegram WebApp is available
            if (window.Telegram.WebApp) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'INIT_SUCCESS',
                data: 'Telegram WebApp is available'
              }));

              // Example of using Telegram WebApp object
              Telegram.WebApp.onEvent('mainButtonClicked', function() {
                Telegram.WebApp.sendData("Button clicked data");
              });
              Telegram.WebApp.MainButton.textColor = "#FFFFFF";
              Telegram.WebApp.MainButton.color = "#2cab37";
              Telegram.WebApp.MainButton.setText("Main button");
              Telegram.WebApp.MainButton.show();

              // Send a message to React Native
              window.ReactNativeWebView.postMessage('Telegram WebApp initialized');
            } else {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'INIT_ERROR',
                data: 'Telegram WebApp is not available'
              }));
            }
          });
        </script>
      </body>
    </html>
  `;

  const handleMessage = (event) => {
    const message = JSON.parse(event.nativeEvent.data);
    if (message.type === 'INIT_SUCCESS') {
      Alert.alert('Success', message.data);
    } else if (message.type === 'INIT_ERROR') {
      Alert.alert('Error', message.data);
    } else {
      Alert.alert('Message from WebView', event.nativeEvent.data);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: telegramBotScript }}
        style={{ flex: 1 }}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TelegramWebView;
