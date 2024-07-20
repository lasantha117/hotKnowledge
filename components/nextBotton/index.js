// NextButton.js
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

import buttonStyles from '../WalletConnector/button'; // Assuming this file defines styles

const NextButton = () => {
  const navigation = useNavigation();

  const goToDashboard = () => {
    navigation.navigate('Dashboard'); // Navigate to Dashboard screen
  };

  return (
    <TouchableOpacity style={buttonStyles.button} onPress={goToDashboard}>
      <Text style={[buttonStyles.buttonText, { textAlign: 'center' }]}>Dashboard</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
