import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.cardContainer}>
        <View style={style.cardBody}>
          <Text style={style.titleText}>Joe Byden</Text>
          <Text style={style.wordsText}> Nasılsınız Dünya</Text>
        </View>
        <TouchableOpacity style={style.buttonContainer}>
          <Text>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <Card />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  cardContainer: {
    margin: 10,
  },
  cardBody: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  wordsText: {
    color: 'gray',
    fontSize: 15,
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: '#00c2ff',
    padding: 10,
    color: 'white',
    fontWeight: '600',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 20,
    alignItems: 'center',
  },
});

export default App;
