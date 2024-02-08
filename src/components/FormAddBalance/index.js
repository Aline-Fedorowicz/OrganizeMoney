import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'




const schema = yup.object({
    name: yup.string().email("Apenas nomes").required("Informe o nome do movimento financeiro"),
    value: yup.number().required("Informe o valor"),
    date: yup.date().required("Informe a data"),
  })
  
  
  
  
  export default function FormAddBalance() {
    const [hidePass, setHidePass] = useState(true)
  
  
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })
  
  
    function handleSignIn(data) {
      console.log(data);
  

    }
  
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Adicione as informações de entrada do seu dinheiro</Text>
        </Animatable.View>
  
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
  
      

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.date && 1,
                  borderColor: errors.date && '#89ca41'
                }]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o nput 'e trocado.
                value={value}
                placeholder="01/03"
              />
  
            )}
          />
  
  
  
          {errors.date && <Text style={styles.labelError}>{errors.date?.message}</Text>}
  

  
  
          <Controller
            control={control}
            name="value"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.value && 1,
                  borderColor: errors.value && '#89ca41'
                }]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o nput 'e trocado.
                value={value}
                placeholder="00,00"
              />
  
            )}
          />
  
  
  
          {errors.value && <Text style={styles.labelError}>{errors.value?.message}</Text>}


  
  
  
          <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
  
        </Animatable.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#89ca41',
    
  
  
    },
    containerHeader: {
      margin: 10,
      
    },
  
    message: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000000',
      width: 320
    },
  
    containerForm: {
      backgroundColor: 'rgb(44 44 44)',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
      paddingTop: 20
  
    },
    title: {
      fontSize: 20,
      marginTop: 28,
      color: '#DADADA'
    },
    input: {
      borderBottomWidth: 1,
      height: 20,
      marginBottom: 12,
      fontSize: 16,
      color: '#DADADA',
    },
    button: {
      backgroundColor: '#89ca41',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
  
    buttonText: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
  
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center',
  
    },
  
    registerText: {
      color: '#DADADA',
    },
  
    labelError: {
      alignSelf: 'flex-start',
      color: '#89ca41',
      marginBottom: 8
    },
    iconInput: {
  
      width: '15%',
      height: 50,
      paddingLeft: '90%'
    
      
    }
  
  
  
  })