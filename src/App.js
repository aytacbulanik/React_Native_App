import React from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

function App() {
  let counter = 0;
  function updateCounter() {
    counter += 1;
    console.log(counter);
  }
  return (
    <SafeAreaView>
      <Text style={styles.textContainer}>Counter : {counter}</Text>
      <Button
        style={styles.buttonContainer}
        title="Arttır"
        onPress={() => {
          updateCounter();
        }}
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
