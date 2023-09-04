import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GenericButton from './GenericButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class FavoriteButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconName: 'cards-heart-outline',
			iconColor: 'black',
		};
	};

	async componentDidMount() {
		const favoriteParks = JSON.parse(await AsyncStorage.getItem('favoriteParks'));
		const isFavoritePark = favoriteParks.some(p => p.id === this.props.park.id);
		this.setState(() => ({
			iconName:  isFavoritePark ? 'cards-heart' : 'cards-heart-outline',
			iconColor: isFavoritePark ? 'red' : 'black',
		}));
	};

	handleIconPress = async (park) => {
		let favoriteParks = JSON.parse(await AsyncStorage.getItem('favoriteParks'));

		const isFavoritePark = favoriteParks.some(p => p.id === park.id);

		this.setState(() => ({
			iconName: isFavoritePark ? 'cards-heart-outline' : 'cards-heart',
			iconColor: isFavoritePark ? 'black' : 'red',
		}));

		if (isFavoritePark) {
			// Remove dos favoritos.
			favoriteParks = favoriteParks.filter(p => p.id !== park.id);
			await AsyncStorage.setItem('favoriteParks', JSON.stringify(favoriteParks));
		}
		else {
			// Adiciona aos favoritos.
			favoriteParks.push(park);
			await AsyncStorage.setItem('favoriteParks', JSON.stringify(favoriteParks));
		}
	};

	render () {
		const { navigate, screen, park, text} = this.props;
		const { iconName, iconColor } = this.state;
		return (
			<View style={[styles.container, globalStyle.button]}>
				<View style={styles.textButton}>
					<GenericButton text={text} navigate={navigate} screen={screen} park={park}/>
				</View>
				<TouchableOpacity onPress={() => {this.handleIconPress(park)}}>
					<Icon name={iconName} color={iconColor} size={30} />
				</TouchableOpacity>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textButton: {
		flex: 1,
		alignItems: 'center',
	},
});