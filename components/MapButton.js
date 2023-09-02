import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, StyleSheet, Linking, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
			<View style={[styles.container, globalStyle.button]}>
				<TouchableOpacity 
					style={styles.buttonContent} 
					onPress={() => this.OpenMap(coordinates.lat, coordinates.lng)}>
						<Text style={[globalStyle.buttonText]}>{text}</Text>
						<Icon name="map-marker-outline" size={30}/>
				</TouchableOpacity>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});