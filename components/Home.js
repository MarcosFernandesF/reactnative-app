import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, Text, Image, StyleSheet } from 'react-native';
import GenericButton from './GenericButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    	title: "Explorador de Parques",
    	headerTitleAlign: 'center',
  	};

	  async componentDidMount() {
		if (await AsyncStorage.getItem('favoriteParks') === null)
		{
			console.log('Criou novo array');
			await AsyncStorage.setItem('favoriteParks', JSON.stringify(new Array()));
		}
	};

	render () {
    	const {navigate} = this.props.navigation;
    	return (
      	<View>
        	<View style={styles.container}>
          		<Image style={styles.logoImage} source={require('../assets/images/park-logo.png')}/>
          		<Text style={styles.logoText}> Bem vindo ao explorador de parques! </Text>
        	</View>
        	<View style={globalStyle.buttonContainer}>
				<View style={globalStyle.button}>
					<GenericButton screen={'ParkList'} text={'Lista de Parques'} navigate={navigate} />
				</View>
				<View style={globalStyle.button}>
					<GenericButton screen={'FavoriteParks'} text={'Parques Favoritos'} navigate={navigate} />
				</View>
				<View style={globalStyle.button}>
					<GenericButton text={'Sair'} navigate={navigate} exit={true} />
				</View>
        	</View>
      	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		alignItems: 'center',
    	justifyContent: 'center',
    	padding: 60,
  	},
  	logoImage: {
    	height: 180,
    	width: 180,
 	 },
 	 logoText: {
  	  fontSize: 18,
 	   textAlign: 'center',
  	  fontWeight: 'bold'
 	 },
})