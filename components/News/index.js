import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import newsData from '../../assets/database/news.json';
import styles from './styles';

const images = {
  YoutubeAdd: require('../../assets/images/YoutubeAdd.jpg'),
  RussianLanguage: require('../../assets/images/RussianLanguage.jpg'),
  bnbChain: require('../../assets/images/bnbChain.jpg'),
  DoodleC: require('../../assets/images/DoodleC.png'), 
};

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const openNews = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closeNews = () => {
    setSelectedNews(null);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>News Time</Text>
      <FlatList
        data={newsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={images[item.image]} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => openNews(item)}>
                <Text style={styles.buttonText}>Check Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {selectedNews && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={selectedNews !== null}
          onRequestClose={closeNews}
        >
          <View style={styles.modalContainer}>
            <Image source={images.DoodleC} style={styles.modalBackgroundImage} />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedNews.title}</Text>
              <Image source={images[selectedNews.image]} style={styles.modalImage} />
              <Text style={styles.modalDescription}>{selectedNews.detailedDescription}</Text>
              <TouchableOpacity onPress={closeNews} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
export default News;
