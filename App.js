import React from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <Text> Hello World </Text>
      </View>
      <View style={styles.bottomView}>
        <Text> Merhaba Dünya </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  upperView: {
    backgroundColor: 'blue',
    flex: 1,
  },
  bottomView: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default App;
