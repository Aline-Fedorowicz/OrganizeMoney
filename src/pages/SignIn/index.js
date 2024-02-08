import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import BarNavigation from '../BarNavigation';


const schema = yup.object({
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").max(10, "A senha deve conter até 10 digitos").required("Informe sua senha")
})




export default function SignIn() {
  const [hidePass, setHidePass] = useState(true)


  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })


  function handleSignIn(data) {
    console.log(data);

    // if(email === '' && password === '') {
    //   alert ("Preencha todos os campos")
    // }

    // if(email === '') {
    //   alert ("Preencha seu email")
    // }

    // if(password === '') {
    //   alert ("Preencha sua senha")
    // }


    // if(password < 6) {
    //   alert ("Sua senha deve conter pelo menos 6 caracteres e deve ser fácil de memorizar")
    // }

    //   const data ={
    //     email,
    //     password
    //   }
    //   console.log(data)
    // }

    navigation.navigate('BarNavigation')
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#89ca41'
              }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o nput 'e trocado.
              value={value}
              placeholder="Seu email"
            />

          )}
        />



        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}



        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, {
                borderWidth: errors.password && 1,
                borderColor: errors.password && '#89ca41'
              }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o textinput 'e trocado.
              value={value}
              placeholder="Digite sua senha"
              secureTextEntry={hidePass}
            />


          )}


        />



        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}






        <TouchableOpacity  style={styles.iconInput} onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
            <Ionicons  name="eye" color="#DADADA" size={25} />
            :

            <Ionicons name="eye-off" color="#DADADA" size={25} />

          }
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}> Não possui uma conta? Cadastre-se</Text>
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
    paddingEnd: '5%'

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
    color: '#89ca41',
    marginBottom: 8
  },
  iconInput: {

    width: '15%',
    height: 50,
    paddingLeft: '90%'
  
    
  }



})