import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderItems = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <ScrollView horizontal>
        {news_banner_data.map(newsbanner => (
          <Image
            style={style.bannerImage}
            source={{uri: newsbanner.imageUrl}}
          />
        ))}
      </ScrollView>
      <FlatList data={news_data} renderItem={renderItems} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  bannerImage: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
  },
});

export default App;
