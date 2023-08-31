import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import StyledButton from '../components/StyledButton';
import MapButton from '../components/MapButton';

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};

	render () {
		const park = this.props.navigation.getParam('park');
		return (
				<ScrollView>
					<View>
						<Text style={styles.parkTitle}>{park.name}</Text>
						<Text style={styles.parkCityState}>{park.cityState}</Text>
					</View>
					<FlatList
						horizontal={true}
						data={park.images}
						renderItem={({item}) =>
						<Image style={styles.imageStyle} source={{uri: item }} />}
					/>
					<View>
						<Text style={styles.subTopics}>Horário de funcionamento</Text>
						<Text style={styles.topicText}>{park.address}</Text>
					</View>
					<View style={styles.container}>
						<Text style={styles.subTopics}>Localização</Text>
						<MapButton text={"Abrir Mapa"} coordinates={park.coordinates}/>
					</View>
				</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	parkTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center'
	},
	parkCityState: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	subTopics: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	topicText: {
		fontSize: 15,
		padding: 10,
		textAlign: 'center'
	},
	container: {
		alignItems: 'center',
    	justifyContent: 'center',
	},
	imageStyle: {
		marginTop: 15,
		marginRight: 5,
		height: 160,
		width: 200,
    	borderWidth: 2,
    	borderColor: 'black',
	  },
})