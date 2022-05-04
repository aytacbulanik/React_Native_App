import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  body: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  words: {
    color: 'gray',
    fontSize: 15,
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: '#00c2ff',
    padding: 10,
    color: 'white',
    fontWeight: '600',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
