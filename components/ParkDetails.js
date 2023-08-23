import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};

	render () {
		const park = this.props.navigation.getParam('park');
		console.log(park);
		return (
			<Text>{park.name}</Text>
		)
	}
}