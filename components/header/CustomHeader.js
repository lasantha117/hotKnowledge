import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the icon buttons

const CustomHeader = () => {
  return (
    // Header container with styling
    <View style={styles.headerContainer}>
      {/* Image */}
      <Image
         source={require('../../assets/images/hotKnowLogo1.png')} // Adjust the path as per your project structure
        style={styles.logo}
      />
      
      {/* Title text */}
      <Text style={styles.title}>Hot Knowledge</Text>

      {/* Container for the icon buttons */}
      <View style={styles.iconsContainer}>
        {/* Ellipsis icon button */}
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
        {/* Close icon button */}
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the header component
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space out items with space between them
    padding: 10, // Padding inside the container
    backgroundColor: '#f7f7f7', // Background color
  },
  logo: {
    width: 50, // Adjust width as needed
    height: 50, // Adjust height as needed
    resizeMode: 'contain', // Adjust the image size and resizeMode as needed
  },
  title: {
    fontSize: 18, // Font size of the title
    fontWeight: 'bold', // Bold font weight
  },
  iconsContainer: {
    flexDirection: 'row', // Arrange icon buttons in a row
  },
  iconButton: {
    marginLeft: 10, // Margin between icon buttons
  },
});

export default CustomHeader;