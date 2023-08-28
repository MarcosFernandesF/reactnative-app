import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};

	render () {
		const park = this.props.navigation.getParam('park');
		return (
			<View >
				<Text style={styles.parkTitle}>{park.name}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	parkTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center'
	},
})