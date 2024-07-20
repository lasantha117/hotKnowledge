import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBDEDC',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
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
    borderRightWidth: 5,
    borderColor: '#007bff',
  },
  buttonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#FFF',
  },
  modalBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.2,
    
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'rgba(235, 222, 220, 0.9)',
    shadowOffset: { width: 2, height: 20 },
    shadowOpacity: 0.85,
    shadowRadius: 70,
    elevation: 70,
    
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFF',
  },

  modalImage: {
    width: width * 0.6,
    height: height * 0.3,
    marginBottom: 16,
    resizeMode: 'contain',
    shadowColor: 'rgba(255, 127, 0, 0.9)',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
