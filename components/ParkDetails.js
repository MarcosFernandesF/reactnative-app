import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import parks from '../assets/mock/ParksMock.json';
import globalStyle from '../assets/styles/style'

export default class ParkDetailsScreen extends React.Component {
    static navigationOptions = {
		title: 'Informações sobre o parque',
	};
}