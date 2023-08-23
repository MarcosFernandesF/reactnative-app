import * as React from 'react';
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
          <Image style={styles.logoImage} source={require('../assets/park-logo.png')}/>
          <Text style={styles.logoText}> Bem vindo ao explorador de parques! </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Parks')}>
            <Text style={styles.buttonText}>Lista de parques</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Parques Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightseagreen',
    width: '50%',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Alinhar o texto no centro do botão
  },
})