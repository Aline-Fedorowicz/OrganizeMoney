import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export default function Welcome() {
  return (

    <View style={styles.container}>

      <View style={styles.containerLogo}>
      <MaterialCommunityIcons name="finance" size={200} color="#DADADA"  />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Monitore seus gastos de qualquer lugar</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </View>
      


    </View>


  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgb(118 39 20)'

  },
   containerLogo:{
    flex: 2,
    backgroundColor: 'rgb(118 39 20)',
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
    color: '#DADADA'
  },
  text: {
    color: '#DADADA'
  },
  button:{
    position: 'absolute',
    backgroundColor: 'rgb(118 39 20)',
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
    color: '#DADADA',
    fontWeight: 'bold'
  }
  

})