// src/Login.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { HereWallet } from '@here-wallet/core';
import axios from 'axios';

const Login = () => {
  const [accountId, setAccountId] = useState(null);

  const login = async () => {
    try {
      const here = await HereWallet.connect({
        botId: 'YOUR_BOT_ID', // Your bot MiniApp
        walletId: 'herewalletbot/app', // HOT Wallet
      });
      const account = await here.signIn({ contractId: 'social.near' });
      setAccountId(account);
      console.log(`Hello ${account}!`);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const authenticate = async () => {
    try {
      const here = await HereWallet.connect();
      const nonce = Array.from(crypto.getRandomValues(new Uint8Array(32)));
      const recipient = window.location.host;
      const message = 'Authenticate message';

      const { signature, publicKey, accountId } = await here.signMessage({ recipient, nonce, message });

      // Verify on your backend side
      const accessToken = await axios.post('YOUR_API_ENDPOINT', { signature, accountId, publicKey, nonce, message, recipient });
      setAccountId(accountId);
      console.log('Auth completed!', accessToken.data);
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{accountId ? `Hello ${accountId}!` : 'Please authenticate'}</Text>
      <Button title="Login" onPress={login} />
      <Button title="Authenticate" onPress={authenticate} />
    </View>
  );
};

export default Login;
