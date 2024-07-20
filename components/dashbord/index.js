import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './dashboardStyles';
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from '@remixicon/react';
import HotBalance from '../hotBalance/hotBalance';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const username = 'Pradeep256.tg';
  const navigation = useNavigation();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [completedWeeks, setCompletedWeeks] = useState([]);
  const totalPoints = useSelector((state) => state.points.totalPoints);
  const hotBalance = useSelector((state) => state.points.hotBalance);

  const images = {
    DoodleC: require('../../assets/images/DoodleC.png'), 
  };

  const handleStartQuiz = () => {
    if (!completedWeeks.includes(currentWeek)) {
      navigation.navigate('Quiz', {
        week: currentWeek,
        onComplete: handleQuizCompletion,
      });
    }
  };

  const handleQuizCompletion = (week) => {
    setCompletedWeeks([...completedWeeks, week]);
  };

  return (
    <View style={styles.container}>
      <Image source={images.DoodleC} style={styles.BackgroundImage} />
      <View style={styles.headerSpace} />
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/logoWithBG.jpg')} style={styles.profilePic} />
        <Text style={styles.username}>{username}</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.totalPointsValue}>{totalPoints}</Text>
          <Text style={styles.totalPointsLabel}>Total Points</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <HotBalance balance={hotBalance} />
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentWeek(currentWeek > 1 ? currentWeek - 1 : currentWeek)}
        >
          <RiArrowLeftCircleLine style={styles.navButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.startButton, completedWeeks.includes(currentWeek) && styles.disabledButton]}
          onPress={handleStartQuiz}
          disabled={completedWeeks.includes(currentWeek)}
        >
          <Text style={styles.startButtonText}>Start Week {currentWeek}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentWeek(currentWeek < 52 ? currentWeek + 1 : currentWeek)}
        >
          <RiArrowRightCircleLine style={styles.navButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
