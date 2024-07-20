import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EBDEDC',
  },
  BackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.05,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEA00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    borderColor: '#555',
  },
  buttonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  friendsListContainer: {
    marginTop: 20,
    padding: 40,
    borderWidth: 5,
    borderColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius:20,
    elevation: 2,
    borderRightWidth: 5,
  },
  friendsListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  friendName: {
    fontSize: 16,
    flex: 1, // Take up remaining space
  },
  friendXP: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
