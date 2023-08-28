import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};

	render () {
		const park = this.props.navigation.getParam('park');
		console.log(park);
		return (
			<View >
				<Text style={styles.parkTitle}>{park.name}</Text>
				<Video
					source={{ uri: park.video }}
					style={styles.video}
        			controls={true}
        			resizeMode="contain"
				/>
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
	video: {
		width: 300,
		height: 200,
	  },
})