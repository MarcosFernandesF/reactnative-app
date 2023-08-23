import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { BackHandler, Text, TouchableOpacity } from 'react-native';

export default class StyledButton extends React.Component {
	render () {
		const { navigate, park, screen = '', text, exit = false } = this.props;
		return (
			<TouchableOpacity 
				style={globalStyle.button} 
				onPress={() => !exit ? navigate(screen, {park: park}) : BackHandler.exitApp()}>
				<Text style={globalStyle.buttonText}>{text}</Text>
			</TouchableOpacity>
		);
	};
}