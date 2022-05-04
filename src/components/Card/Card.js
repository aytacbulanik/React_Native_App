import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './Card.style';

const Card = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.title}>Elif Şanlı</Text>
        <Text style={style.words}> Nasılsınız Dünya</Text>
      </View>
      <TouchableOpacity style={style.buttonContainer}>
        <Text style={style.buttonText}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
