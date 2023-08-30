import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { Linking, Text, TouchableOpacity } from 'react-native';

export default class MapButton extends React.Component {
    FormatGeoLocalization(cord) {
        return cord.degrees + (cord.minutes / 60) + (cord.seconds / 3600);
    };

    OpenMap(lat, lng) {
        const mapUrl = Platform.select({
            ios: `maps:0,0?q=${lat},${lng}`,
            android: `geo:0,0?q=${lat},${lng}`
          });
        
        Linking.openURL(mapUrl);
    };

	render () {
		const { lat, lng, text } = this.props;
        const latDecimal = this.FormatGeoLocalization(lat);
        const lngDecimal = this.FormatGeoLocalization(lng);
		return (
			<TouchableOpacity 
				style={globalStyle.button} 
				onPress={() => this.OpenMap(latDecimal, lngDecimal)}>
				<Text style={globalStyle.buttonText}>{text}</Text>
			</TouchableOpacity>
		);
	};
}

