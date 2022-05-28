import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <SafeAreaView>
      <Text> Deneme sayısı</Text>
      <Text> Sayı : {number}</Text>
      <Button title='Arttır' onPress={() => setNumber(number + 2)}/>
    </SafeAreaView>
  );
}

export default App;
