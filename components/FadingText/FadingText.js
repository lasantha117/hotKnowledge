import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FadingText = () => {
  const [currentMessage, setCurrentMessage] = useState('Hello Genius...! ');
  const [isVisible, setIsVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Hey Genius...! ',
    'Please connect Your wallet to continue'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setMessageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % messages.length;
          setCurrentMessage(messages[nextIndex]);
          return nextIndex;
        });
        setIsVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.text}>{currentMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally

  },
  text: {
    fontSize: 20, // Adjust font size as needed
    color: '#000', // Text color
    fontWeight: 'bold', // Make text bold
  },
});

export default FadingText;
