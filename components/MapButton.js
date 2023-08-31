import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { Linking, Text, TouchableOpacity } from 'react-native';

export default class MapButton extends React.Component {
    OpenMap(lat, lng) {
        const mapUrl = Platform.select({
            ios: `maps:0,0?q=${lat},${lng}`,
            android: `geo:0,0?q=${lat},${lng}`
          });
        
        Linking.openURL(mapUrl);
    };

	render () {
		const { coordinates, text } = this.props;
		return (
			<TouchableOpacity 
				style={globalStyle.button} 
				onPress={() => this.OpenMap(coordinates.lat, coordinates.lng)}>
				<Text style={globalStyle.buttonText}>{text}</Text>
			</TouchableOpacity>
		);
	};
}

