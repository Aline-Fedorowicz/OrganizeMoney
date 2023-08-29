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
  
  
  
  
  export default function FormAddExpense() {
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
          <Text style={styles.message}>Adicione as informações de saída do seu dinheiro</Text>
        </Animatable.View>
  
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
  
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.name && 1,
                  borderColor: errors.name && 'rgb(205 70 39)'
                }]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o nput 'e trocado.
                value={value}
                placeholder="Nome do movimento financeiro"
              />
  
            )}
          />
  
  
  
          {errors.name && <Text style={styles.labelError}>{errors.name?.message}</Text>}
  

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.date && 1,
                  borderColor: errors.date && 'rgb(205 70 39)'
                }]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o nput 'e trocado.
                value={value}
                placeholder="Data"
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
                  borderColor: errors.value && 'rgb(205 70 39)'
                }]}
                onChangeText={onChange}
                onBlur={onBlur} //chamado quando o nput 'e trocado.
                value={value}
                placeholder="Valor"
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
      backgroundColor: 'rgb(118 39 20)'
  
    },
    containerHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      padding: '5%'
    },
  
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#DADADA'
    },
  
    containerForm: {
      backgroundColor: 'rgb(44 44 44)',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
      paddingTop: 14
  
    },
    title: {
      fontSize: 20,
      marginTop: 28,
      color: '#DADADA'
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      color: '#A9A9A9',
    },
    button: {
      backgroundColor: 'rgb(118 39 20)',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      color: '#DADADA',
      fontSize: 18,
      fontWeight: 'bold'
  
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center',
  
    },
  
    registerText: {
      color: '#A9A9A9',
    },
  
    labelError: {
      alignSelf: 'flex-start',
      color: 'rgb(205 70 39)',
      marginBottom: 8
    },
    iconInput: {
  
      width: '15%',
      height: 50,
      paddingLeft: '90%'
    
      
    }
  
  
  
  })