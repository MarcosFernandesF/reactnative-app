import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, StyleSheet, BackHandler, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GenericButton from './GenericButton';

export default class FavoriteButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconName: 'cards-heart-outline',
		};
	}

	handleTextPress = () => {
		const { exit, navigate, screen, park } = this.props;
		if (!exit) {
			navigate(screen, { park: park });
		} else {
			BackHandler.exitApp();
		}
	};

	handleIconPress = () => {
		this.setState((prevState) => ({
			iconName: prevState.iconName === 'cards-heart-outline' ? 'cards-heart' : 'cards-heart-outline',
		}));
	};

	render () {
		const { navigate, screen, park, text} = this.props;
		const { iconName } = this.state;
		return (
			<View style={[styles.container, globalStyle.button]}>
				<View style={styles.textButton}>
					<GenericButton text={text} navigate={navigate} screen={screen} park={park}/>
				</View>
				<TouchableOpacity onPress={this.handleIconPress}>
					<Icon name={iconName} size={30} />
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