import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { BackHandler, Text, TouchableOpacity, Linking } from 'react-native';

export default class GenericButton extends React.Component {
	handlePress = () => {
		const { exit, navigate, screen, park, phoneNumber, link } = this.props;
		if (phoneNumber) {
			const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
			Linking.canOpenURL(whatsappURL)
				.then((supported) => {
					if (supported) {
						Linking.openURL(whatsappURL);
					}
				})
				.catch((error) => {
					console.error("Erro ao verificar suporte ao WhatsApp:", error);
				});
		} else if (link) {
			Linking.openURL(link);
		} else if (screen) {
			navigate(screen, { park: park });
		} else if (exit) {
			BackHandler.exitApp();
		}
	};

	render() {
		const { text } = this.props;
		return (
			<TouchableOpacity onPress={this.handlePress}>
				<Text style={globalStyle.buttonText}>{text}</Text>
			</TouchableOpacity>
		);
	};
}
