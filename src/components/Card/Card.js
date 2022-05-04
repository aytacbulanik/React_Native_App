import React from 'react';
import {View, Text, TouchableOpacity} from 'React-native';
import style from './Card.style';

const Card = () => {
  return (
    <View style={style.cardView}>
      <View style={style.cardBody}>
        <Text style={style.titleText}>Joe Byden</Text>
        <Text style={style.wordsText}> Nasılsınız Dünya</Text>
      </View>
      <TouchableOpacity style={style.buttonContainer}>
        <Text style={style.buttonText}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
