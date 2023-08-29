import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import FlatListMoviments from '../../components/FlatListMoviments/index'
import React from 'react';


const list = [
  {
    id: 1,
    label: 'UberTrip',
    value: 45.00,
    date: '17/12/2023',
    type: 0 //despesas
  },

  {
    id: 2,
    label: 'Pix Aline',
    value: 500.00,
    date: '17/12/2023',
    type: 1 //entradas
  },

  {
    id: 3,
    label: 'Salário',
    value: 500.00,
    date: '18/12/2023',
    type: 1 //entradas
  }
]






export default function Home() {
  const entradas = list.filter((item) => item.type === 1)

  const saidas = list.filter((item) => item.type === 0)
  
  
  function calcSumTotal() {
  
    let sum = 0
  
    for (var i = 0; i < entradas.length; i++) {
      sum += entradas[i].value;
  
      console.log('somaFor', sum)
    }
  
  
  
    setSumOfValues(sum)
  
  }
  
  function calcSubTotal() {
  
    let sub = 0
  
    for (var i = 0; i < saidas.length; i++) {
      sub += saidas[i].value;
  
      console.log('-for', sub)
    }
  
  
  
    setSubOfValues(sub)
  
  }
  
  const [sumOfValues, setSumOfValues] = useState(0)
  const [subOfValues, setSubOfValues] = useState(0)

  const [load, setLoad] = useState(true)


  useEffect(() => {
    window.addEventListener('focus', () => setLoad(!load))
    calcSumTotal()
    calcSubTotal()



  }, [load])
  return (
    <View style={styles.container}>
      <Header name="Aline Fedorowicz" />
      <Balance saldo={sumOfValues} gastos={subOfValues} />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatListMoviments />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(44 44 44)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    marginBottom: 25,
    marginTop: 25,
    color: '#DADADA'
  },

  list: {
    marginStart: 14,
    marginEnd: 14,

  }
});
