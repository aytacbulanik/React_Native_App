import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> Deneme </Text>
      </View>
      <Button
        title="Press me"
        onPress={() => {
          console.log('Basıldı');
        }}
      />
    </SafeAreaView>
  );
}

export default App;
