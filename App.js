import React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  box_1: {
    backgroundColor: 'blue',
    width: 75,
    height: 75,
  },
  box_2: {
    backgroundColor: 'yellow',
    width: 75,
    height: 75,
  },
  box_3: {
    backgroundColor: 'green',
    width: 75,
    height: 75,
  },
  box_4: {
    backgroundColor: 'red',
    width: 75,
    height: 75,
  },
});

export default App;
