import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'React-native';
import style from './Card.style';

const Card = () => {
  return (
    <SafeAreaView style={style.cardContainer}>
      <View style={style.cardView}>
        <View>
          <Text>Joe Byden</Text>
          <Text> Nasılsınız Dünya</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
