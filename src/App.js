import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <Card title="Joe Biden" words="Dünya benden korksun" />
      <Card title="Arif Işık" words="Uzaylılar tarafından kaçırıldım" />
      <Card title="Sıla" words="Yıkılmışım ben" />
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
