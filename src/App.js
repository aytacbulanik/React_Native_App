import React, {useState} from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

function App() {
  const data = [
    {id: 0, name: 'cafe.exe', isFavorite: true},
    {id: 1, name: 'KafaKafa', isFavorite: false},
    {id: 2, name: 'BugS', isFavorite: false},
    {id: 3, name: 'Rock in code', isFavorite: true},
    {id: 4, name: 'do drink', isFavorite: false},
    {id: 5, name: 'esc', isFavorite: true},
  ];

  return (
    <SafeAreaView>
      <Text style={styles.textContainer}>Counter : {counter}</Text>
      <Button
        style={styles.buttonContainer}
        title="Arttır"
        onPress={upCounter}
      />
      <Button
        style={styles.buttonContainer}
        title="Azalt"
        onPress={downCounter}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    fontSize: 30,
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
    color: 'red',
    backgroundColor: 'green',
  },
});

export default App;
