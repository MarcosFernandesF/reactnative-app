import * as React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import parks from '../assets/mock/ParksMock.json';
import FavoriteButton from './FavoriteButton';

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
      		  	<Image style={styles.logo} source={{uri: item.logo }} />
       		 	<Text>{item.cityState}</Text>
      		  	<FavoriteButton text={item.name} navigate={navigate} screen={'ParkDetails'} park={item} renderIcon={true} />
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
    logo: {
    	height: 160,
    	width: 210,
    },
})