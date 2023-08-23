import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import parks from '../ParksMock.json';

export default class ParksScreen extends React.Component {
  static navigationOptions = {
	title: 'Lista de Parques',
  };

render () {
    return(
    	<Text>teste1</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 15
  },
  parkName: {
    fontSize: 18,
    height: 44,
  }
})