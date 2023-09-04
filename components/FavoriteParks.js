import * as React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import FavoriteButton from './FavoriteButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class FavoriteParksScreen extends React.Component {
	static navigationOptions = {
		title: 'Parques favoritos',
	};

	constructor(props) {
		super(props);
		this.state = {
		  parks: [],
		};
	  }

	async componentDidMount() {
		try {
		  let favoriteParks = JSON.parse(await AsyncStorage.getItem('favoriteParks'));
		  if (favoriteParks) {
			this.setState({ parks: favoriteParks });
		  }
		} catch (error) {
		  console.error('Error loading favorite parks:', error);
		}
	  }

	render () {
		const {navigate} = this.props.navigation;
		const { parks } = this.state;
		return(
    		<FlatList
    		data={parks}
    		renderItem={({item}) =>
      		<View style={styles.container}>
				<Image style={styles.logo} source={{ uri: item.logo }} />
				<Text>{item.cityState}</Text>
				<FavoriteButton text={item.name} navigate={navigate} screen={'ParkDetails'} park={item} />
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