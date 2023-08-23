import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import parks from '../assets/mock/ParksMock.json';
import globalStyle from '../assets/styles/style'

export default class ParksListScreen extends React.Component {
  static navigationOptions = {
	title: 'Lista de Parques',
  };

render () {
  return(
    <FlatList
    data={parks}
    renderItem={({item}) =>
      <View style={globalStyle.buttonContainer}>
        <TouchableOpacity style={globalStyle.button} onPress={() => navigate('Parks')}>
          <Text style={globalStyle.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      </View>}
    />
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