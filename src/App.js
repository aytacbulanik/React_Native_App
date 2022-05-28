import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function App() {
  const [useFlag, setUseFlag] = useState(true);

  function goruntuyuDegis() {
    setUseFlag(!useFlag);
  }

  return (
    <SafeAreaView>
      <Text> Hadi birşeyleri değiştir.</Text>
      <Button title="Değiştir" onPress={goruntuyuDegis} />
      {useFlag && <Hello />}
    </SafeAreaView>
  );
}

export default App;

function Hello() {
  useEffect(() => {
    console.log('bir defa çalşışacağım');

    return () => {
      console.log('silindiğim zaman çalışacağım');
    };
  }, []);
  return <Text>merhaba ben kaybolacak Component</Text>;
}
