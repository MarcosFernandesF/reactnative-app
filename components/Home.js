import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, Text, Image, Button, TouchableOpacity, BackHandler, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Explorador de Parques",
    headerTitleAlign: 'center',
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
          <TouchableOpacity style={globalStyle.button} onPress={() => navigate('Parkss')}>
            <Text style={globalStyle.buttonText}>Lista de Parques</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.button}>
            <Text style={globalStyle.buttonText}>Parques Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyle.button} onPress={() => BackHandler.exitApp()}>
            <Text style={globalStyle.buttonText}>Sair</Text>
          </TouchableOpacity>
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