import React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text> Deneme </Text>
      </View>
      <Button
        title="Press me"
        onPress={() => {
          console.log('Basıldı dimi');
        }}
        disabled={false}
        color={'#02af34'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
