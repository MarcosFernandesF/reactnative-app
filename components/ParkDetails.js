import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import GenericButton from '../components/GenericButton';
import MapButton from '../components/MapButton';
import globalStyle from '../assets/styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};

	render () {
		const park = this.props.navigation.getParam('park');
		const { navigate } = this.props.navigation;
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
					<Text style={styles.topicText}>{park.hours}</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.subTopics}>Localização</Text>
					<Text style={styles.topicText}>{park.address}</Text>
					<MapButton text={"Abrir Mapa"} coordinates={park.coordinates}/>
				</View>
				<View style={styles.container}>
					<Text style={styles.subTopics}>Ingresso</Text>
					<Text style={styles.topicText}>Valor do ingresso: {park.ticketValue}</Text>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"Compre seus ingressos"} navigate={navigate} link={park.ticketLink}/>
						<Icon name='ticket' size={30} style={styles.icon}/>
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.subTopics}>Contato e Redes Sociais</Text>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"Email"} link={`mailto:${park.email}`}/>
						<Icon name='email' size={30} style={styles.icon}/>
					</View>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"Website"} link={park.website}/>
						<Icon name='earth' size={30} style={styles.icon}/>
					</View>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"Instagram"} link={park.instagram}/>
						<Icon name='instagram' size={30} style={styles.icon}/>
					</View>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"WhatsApp"} phoneNumber={park.phoneNumber}/>
						<Icon name='whatsapp' size={30} style={styles.icon}/>
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.subTopics}>Video Promocional</Text>
					<View style={[globalStyle.button, styles.flexContainer]}>
						<GenericButton text={"Assistir"} link={park.video}/>
						<Icon name='play' size={30} style={styles.icon}/>
					</View>
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
	flexContainer:{
		flexDirection: 'row',
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
	icon: {
		marginLeft: 10
	}
})