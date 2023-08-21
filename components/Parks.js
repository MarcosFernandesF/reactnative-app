import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import parks from '../ParksMock.json';

export default class ParksList extends React.Component {
  static navigationOptions = {
    title: 'Lista de Parques',
  };

  render () {
    return(
      <ScrollView style={styles.container}> 
        <FlatList
          data={parks}
          renderItem={({item}) =>
          <View>
            <Text style={styles.parkName}>{item.name}</Text>
          </View>}
        />
      </ScrollView>
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