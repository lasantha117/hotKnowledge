import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Friends = () => {
  const images = {
    DoodleC: require('../../assets/images/dashbordDoodle.png'), 
  };

  return (
    <View style={styles.container}>
      <Image source={images.DoodleC} style={styles.BackgroundImage} />
      <Text style={styles.title}>Invite Frens</Text>
      <Text style={styles.description}>
        You will earn 10 XP for each invite, while your friend receives 10 XP!
      </Text>
      <Image source={require('../../assets/images/invite.png')} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Invite a Fren</Text>
      </TouchableOpacity>
      <View style={styles.friendsListContainer}>
        <Text style={styles.friendsListTitle}>My Frens:</Text>
        <View style={styles.friend}>
          <Image source={require('../../assets/images/profileImg.jpg')} style={styles.friendImage} />
          <Text style={styles.friendName}>lasantha.tg       </Text>
          <Text style={styles.friendXP}>342 XP</Text>
        </View>
        <View style={styles.friend}>
          <Image source={require('../../assets/images/profileImg.jpg')} style={styles.friendImage} />
          <Text style={styles.friendName}>pradeep.tg        </Text>
          <Text style={styles.friendXP}>233 XP</Text>
        </View>
      </View>
    </View>
  );
};

export default Friends;
