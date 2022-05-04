import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import style from './Card.style';

const Card = props => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text style={style.title}>{props.title}</Text>
        <Text style={style.words}> {props.words}</Text>
      </View>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => Alert.alert('Merhaba')}>
        <Text style={style.buttonText}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
