import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('number changed');
  }, [number]);

  function flowNumber() {
    console.log('1. Mumber value : ' + number);
    setNumber(number + 1);
    console.log('2. Mumber value : ' + number);
  }
  return (
    <SafeAreaView>
      <Text> Deneme sayısı</Text>
      <Text> Sayı : {number}</Text>
      <Button title="Arttır" onPress={flowNumber} />
    </SafeAreaView>
  );
}

export default App;
