import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './quizStyles';
import { useDispatch } from 'react-redux';
import { addPoints } from '../../assets/redux/pointsSlice';

const questions = require('../../assets/database/questions.json');

const Quiz = ({ route, navigation }) => {
  const { week, onComplete } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [localPoints, setLocalPoints] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const dispatch = useDispatch();

  const images = {
    DoodleC: require('../../assets/images/DoodleA.png'),
  };

  useEffect(() => {
    if (week === 1) {
      setCurrentQuestions(questions.Week1);
    } else if (week === 2) {
      setCurrentQuestions(questions.Week2);
    } else if (week === 3) {
      setCurrentQuestions(questions.Week3);
    }
  }, [week]);

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextPress = () => {
    if (selectedAnswer === currentQuestions[currentQuestionIndex].correctAnswer) {
      setLocalPoints(localPoints + 10);
    }
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      dispatch(addPoints(localPoints));
      onComplete(week);
      navigation.navigate('Dashboard');
    }
  };

  if (currentQuestions.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={images.DoodleC} style={styles.BackgroundImage} />
      <Text style={styles.questionText}>{currentQuestions[currentQuestionIndex].question}</Text>
      {currentQuestions[currentQuestionIndex].answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            selectedAnswer === answer && styles.selectedAnswerButton,
          ]}
          onPress={() => handleAnswerPress(answer)}
        >
          <View style={styles.radioCircle}>
            {selectedAnswer === answer && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.nextButton, !selectedAnswer && styles.disabledNextButton]}
        onPress={handleNextPress}
        disabled={!selectedAnswer}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;
