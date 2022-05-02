import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View>
        <View style={style.cardView}>
          <Text style={style.titleText}>Joe Byden</Text>
          <Text style={style.wordsText}> Nasılsınız Dünya</Text>
        </View>
        <TouchableOpacity>
          <Text style={style.buttonContainer}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  cardView: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
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
    backgroundColor: 'blue',
    color: 'white',
    alignItems: 'center',
  },
});

export default App;
