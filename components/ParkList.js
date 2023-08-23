import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import parks from '../assets/mock/ParksMock.json';
import StyledButton from './StyledButton';

export default class ParksListScreen extends React.Component {
  static navigationOptions = {
	title: 'Lista de Parques',
  };

render () {
  const {navigate} = this.props.navigation;
  return(
    <FlatList
    data={parks}
    renderItem={({item}) =>
      <View style={styles.container}>
        <StyledButton text={item.name} navigate={navigate} screen={'ParkDetails'} item={item} />
      </View>}
    />
  );
  }
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 15,
		alignItems: 'center',
        justifyContent: 'center',
  	},
})