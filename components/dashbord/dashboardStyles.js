import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBDEDC',
    flexGrow: 1
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
    opacity: 0.5,
    
  },
  headerSpace: {
    height: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 90,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  pointsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  totalPointsLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  totalPointsValue: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  navButton: {
    padding: 7,
    backgroundColor: 'transparent',
    borderRadius: 30, // Rounded corners for navigation buttons
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 2,
    marginHorizontal: 10, // Adjusts the distance between buttons
    borderWidth: 1, // Add border width
    borderColor: '#555', // Add border color
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  startButton: {
    borderRadius: 30, // Rounded corners for start button
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


  },
  startButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  centerContainer: {

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
