import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { HereWallet } from '@here-wallet/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import buttonStyles from './button'; // Assuming this file contains styles for the button

// const CustomButton = ({ title, onPress, iconName }) => {
//   return (
//     <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
//       <Text style={buttonStyles.buttonText}>{title}</Text>
//       {iconName && <Icon name={iconName} size={20} style={{ marginLeft: 10 }} />}
//     </TouchableOpacity>
//   );
// };

// const WalletConnector = () => {
//   const [accountId, setAccountId] = useState(null);
//   const [isConnected, setIsConnected] = useState(false); // Track connection status

//   const connectWallet = async () => {
//     try {
//       const here = await HereWallet.connect();
//       const account = await here.signIn({ contractId: 'social.near' });
//       console.log(`Hello ${account}!`);
//       setAccountId(account);
//       setIsConnected(true); // Update connection status
//     } catch (error) {
//       console.error('Failed to connect wallet:', error);
//     }
//   };

//   // Handle navigation to dashboard on successful connection
//   useEffect(() => {
//     if (isConnected) {
//       // Use your preferred navigation library to navigate to the dashboard URL
//       // (e.g., react-navigation, expo-navigation)
//       // Assuming you have a navigation constant or function:
//       navigation.navigate('Dashboard');
//     }
//   }, [isConnected]); // Rerun useEffect when isConnected changes

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {accountId ? (
//         <Text>Hello {accountId}!</Text>
//       ) : (
//         <CustomButton title="Connect Wallet" onPress={connectWallet} iconName="wallet" />
//       )}
//     </View>
//   );
// };

// export default WalletConnector;

const CustomButton = ({ title, onPress, iconName }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
      {iconName && <Icon name={iconName} size={20} style={{ marginLeft: 10 }} />}
    </TouchableOpacity>
  );
};

const WalletConnector = ({ navigation }) => { // Pass navigation prop
  const connectWallet = async () => {
    try {
      const here = await HereWallet.connect();
      // Handle wallet connection logic here if needed (optional)
      console.log('Wallet connected (for informational purposes)');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      navigation.navigate('Dashboard'); // Navigate to dashboard regardless of connection success
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton title="Connect Wallet" onPress={connectWallet} iconName="wallet" />
    </View>
  );
};

export default WalletConnector;