import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
 
  contentContainer: {
    flex: 1,

    padding: 20,
    borderRadius: 10,
    zIndex: 2,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 70,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#111', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 7, 
    borderColor: '#FFFFFF', 

    padding: 10, 
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 50,
  },
});

export default styles;
