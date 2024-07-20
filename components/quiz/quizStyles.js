import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    opacity: 0.4,
    
  },
  questionText: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
    textShadowColor: '#000',  // Border color
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  answerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 15,
    marginBottom: 5,  // Reduced marginBottom
    backgroundColor: '#2E2E2E',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2E2E2E',
  },
  selectedAnswerButton: {
    borderColor: '#FFEA00',
    backgroundColor: '#3E3E3E',
  },
  answerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,  // Reduced fontSize
    flex: 1, 
  },
  radioCircle: {
    height: 15,  // Reduced height
    width: 15,  // Reduced width
    borderRadius: 7.5,  // Reduced borderRadius
    borderWidth: 2,
    borderColor: '#FFEA00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 8,  // Reduced width
    height: 8,  // Reduced height
    borderRadius: 4,  // Reduced borderRadius
    backgroundColor: '#FFEA00',
  },
  nextButton: {
    borderRadius: 20,  // Reduced borderRadius
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // Center the text
    backgroundColor: '#FFEA00',
    paddingVertical: 8,  // Reduced paddingVertical
    paddingHorizontal: 16,  // Reduced paddingHorizontal
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 10,  // Added marginTop to separate from answers
    borderColor: '#555',
  },
  disabledNextButton: {
    backgroundColor: '#9A9A9A',
  },
  nextButtonText: {
    color: '#111',
    fontSize: 14,  // Reduced fontSize
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default styles;
