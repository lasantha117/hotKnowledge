import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './dashboardStyles';
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from '@remixicon/react';
import HotBalance from '../hotBalance/hotBalance';
import { useSelector } from 'react-redux';
import DashboardParticlesComponent from '../../assets/particles/dashboardParticle';
import WebApp from '@twa-dev/sdk'; // Import the Telegram Web App SDK
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [completedWeeks, setCompletedWeeks] = useState({});
  const totalPoints = useSelector((state) => state.points.totalPoints);
  const hotBalance = useSelector((state) => state.points.hotBalance);

  // Fetch the Telegram username using the SDK
  useEffect(() => {
    if (WebApp.initDataUnsafe?.user) {
      setUsername(WebApp.initDataUnsafe.user.username);
    }
  }, []);

  // Load completed weeks from AsyncStorage
  useEffect(() => {
    const loadCompletedWeeks = async () => {
      try {
        const storedCompletedWeeks = await AsyncStorage.getItem('completedWeeks');
        if (storedCompletedWeeks) {
          setCompletedWeeks(JSON.parse(storedCompletedWeeks));
        }
      } catch (error) {
        console.error('Failed to load completed weeks:', error);
      }
    };

    loadCompletedWeeks();
  }, []);

  const handleStartQuiz = () => {
    if (!completedWeeks[currentWeek]) {
      navigation.navigate('Quiz', {
        week: currentWeek,
        onComplete: handleQuizCompletion,
      });
    }
  };

  const handleQuizCompletion = async (week) => {
    console.log('Completed week:', week);
    const updatedCompletedWeeks = {
      ...completedWeeks,
      [week]: true
    };

    setCompletedWeeks(updatedCompletedWeeks);

    try {
      await AsyncStorage.setItem('completedWeeks', JSON.stringify(updatedCompletedWeeks));
    } catch (error) {
      console.error('Failed to save completed weeks:', error);
    }

    // Automatically unlock the next week
    setCurrentWeek(week + 1);
  };

  return (
    <View style={styles.container}>
      <DashboardParticlesComponent />
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
          style={[
            styles.startButton,
            completedWeeks[currentWeek] && styles.disabledButton
          ]}
          onPress={handleStartQuiz}
          disabled={completedWeeks[currentWeek]}
        >
          <Text style={styles.startButtonText}>
            {completedWeeks[currentWeek] ? `Week ${currentWeek} Completed` : `Start Week ${currentWeek}`}
          </Text>
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
