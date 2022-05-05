import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <Text>Flatlist Projesi</Text>
      <FlatList
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
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
