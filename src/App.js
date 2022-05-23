import React, {useState} from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

function App() {
  const [counter, setCounter] = useState(5);

  function updateCounter() {
    setCounter(counter + 1);
  }

  return (
    <SafeAreaView>
      <Text style={styles.textContainer}>Counter : {counter}</Text>
      <Button
        style={styles.buttonContainer}
        title="Arttır"
        onPress={updateCounter}
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
