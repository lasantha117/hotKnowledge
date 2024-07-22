import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setPoints, setHotBalance } from '../../assets/redux/pointsSlice';
import HotBalance from '../hotBalance/hotBalance';
import styles from './swapStyles';

const SwapPage = () => {
  const images = {
    DoodleC: require('../../assets/images/DoodleA.png'),
  };

  const totalPoints = useSelector((state) => state.points.totalPoints);
  const hotBalance = useSelector((state) => state.points.hotBalance);
  const dispatch = useDispatch();
  const [inputPoints, setInputPoints] = useState(totalPoints);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const conversionRatio = 200; // 200 points for 1 HOT token
  const minimumPointsRequired = 200;

  useEffect(() => {
    setInputPoints(totalPoints);
  }, [totalPoints]);

  const handlePointsChange = (value) => {
    const pointsValue = parseInt(value, 10);
    setInputPoints(pointsValue);
  };

  const handleConvert = () => {
    if (inputPoints <= 0) {
      setErrorMessage('Please enter a point value');
      setErrorModalVisible(true); // Show the error modal
      return;
    }

    if (inputPoints < minimumPointsRequired) {
      setErrorMessage('Oops! Need 200 points');
      setErrorModalVisible(true); // Show the error modal
      return;
    }

    const newHotBalance = hotBalance + (inputPoints / conversionRatio);
    dispatch(setHotBalance(newHotBalance)); // Update the hotBalance in the Redux store
    dispatch(setPoints(0)); // Reset the points after conversion
    setModalVisible(true); // Show the success modal
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeErrorModal = () => {
    setErrorModalVisible(false);
  };

  const hotEquivalent = inputPoints > 0 ? (inputPoints / conversionRatio).toFixed(2) : '0';

  return (
    <View style={styles.container}>
      <Image source={images.DoodleC} style={styles.BackgroundImage} />
      <View style={styles.topRightContainer}>
        <HotBalance balance={hotBalance} />
      </View>
      <View style={styles.topLeftContainer}>
        <View style={styles.topPoint}>
          <Text style={styles.topPointbalanceContainer}>Points Balance</Text>
          <Text style={styles.topPointbalance}>{totalPoints}</Text>
        </View>
      </View>
      <View style={styles.swapContainer}>
        <View style={styles.tokenContainer}>
          <Text style={styles.tokenLabel}>Points</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder={inputPoints < minimumPointsRequired ? "min 200" : ""}
            value={inputPoints > 0 ? inputPoints.toString() : ""}
            onChangeText={handlePointsChange}
          />
        </View>
        <View style={styles.tokenContainer}>
          <Text style={styles.tokenLabel}>HOT</Text>
          <View style={styles.hotValueContainer}>
            <Text>{hotEquivalent}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.reviewButton} onPress={handleConvert}>
        <Text style={styles.reviewButtonText}>Convert</Text>
      </TouchableOpacity>
      
      {inputPoints < minimumPointsRequired && (
        <Text style={styles.minimumPointsText}>You should have minimum 200 Points</Text>
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Conversion Successful!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="slide"
        visible={errorModalVisible}
        onRequestClose={closeErrorModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeErrorModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SwapPage;
