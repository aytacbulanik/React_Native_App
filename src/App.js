import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <Text>Flatlist Projesi</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={data => <Text>{data.item}</Text>}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
