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
			<View style={styles.container}>
				<View style={styles.flexCenter}>
					<Text style={styles.parkTitle}>{park.name}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	parkTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginTop: 20,
	},
	flexCenter: {
		alignItems: 'center',
	}
})