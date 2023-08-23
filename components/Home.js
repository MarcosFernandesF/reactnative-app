import * as React from 'react';
import globalStyle from '../assets/styles/style'
import { View, Text, Image, StyleSheet } from 'react-native';
import StyledButton from './StyledButton';

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
          <StyledButton screen={'ParkList'} text={'Lista de Parques'} navigate={navigate} />
          <StyledButton screen={''} text={'Parques Favoritos'} navigate={navigate} />
          <StyledButton screen={'ParkList'} text={'Sair'} navigate={navigate} exit={true} />
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