import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'



export default function Welcome() {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>

      <View style={styles.containerLogo}>
      <MaterialCommunityIcons name="piggy-bank-outline" size={200} color="#ffffff"  />
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore suas finanças de qualquer lugar</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress ={ () => navigation.navigate('SignIn') }
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>
      


    </View>


  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#89ca41'

  },
   containerLogo:{
    flex: 2,
    backgroundColor: '#89ca41',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    backgroundColor: 'rgb(44 44 44)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#ffffff'
  },
  text: {
    color: '#DADADA'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#89ca41',
    borderRadius: 50,
    paddingVertical: 8,
    width:'60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold'
  }
  

})