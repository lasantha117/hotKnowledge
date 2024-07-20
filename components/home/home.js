import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles';

import WalletConnector from '../WalletConnector/WalletConnector';


const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/DoodleA.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />

      
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/hk_logo.gif')}
          style={styles.logo}
        />
        <Text style={styles.title}>Hot Knowledge</Text>
        
        <WalletConnector />
      </View>
    </ImageBackground>
  );
};

export default Home;
