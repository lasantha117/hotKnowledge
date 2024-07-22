import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:  180, 
        height: 100, 
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    balanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    balance: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  
  export default styles;
  