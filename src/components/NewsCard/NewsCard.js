import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './NewsCard.style';

const newsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}> {news.title} </Text>
      <Text style={styles.description}> {news.description} </Text>
    </View>
  );
};

export default newsCard;
