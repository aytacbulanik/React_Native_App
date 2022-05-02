import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.cardView}>
        <View>
          <Text>Joe Byden</Text>
          <Text> Nasılsınız Dünya</Text>
        </View>
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
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});

export default App;
