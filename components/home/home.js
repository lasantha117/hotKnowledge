import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import WalletConnector from '../WalletConnector/WalletConnector';

const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hot</Text>
          <Text style={styles.title}>Knowledge</Text>
        </View>
        <WalletConnector />
      </View>
    </View>
  );
};

export default Home;
