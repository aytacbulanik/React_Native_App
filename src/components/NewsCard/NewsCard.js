import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './NewsCard.style';

const newsCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}> Deneme Verisi </Text>
      <Text style={styles.description}> Açıklama </Text>
    </View>
  );
};

export default newsCard;
