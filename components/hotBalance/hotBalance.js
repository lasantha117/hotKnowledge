import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const HotBalance = ({ balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOT Balance</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>{balance.toFixed(6)}</Text>
      </View>
    </View>
  );
};



export default HotBalance;
