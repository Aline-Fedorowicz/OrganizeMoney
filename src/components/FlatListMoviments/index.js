import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'



const list = [
  {
    id: 1,
    label: 'UberTrip',
    value: 45.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    pureValue: 45.00,
    date: '17/12/2023',
    type: 0 //despesas
  },

  {
    id: 2,
    label: 'Pix Aline',
    value: 500.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    pureValue: 500.00,
    date: '17/12/2023',
    type: 1 //entradas
  },

  {
    id: 3,
    label: 'Salário',
    value: 500.00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    pureValue: 500.00,
    date: '18/12/2023',
    type: 1 //entradas
  }
]











// console.log('Gastos', subOfValues)
// console.log('Entradas', sumOfValues)







export default function listMoviments() {
  const entradas = list.filter((item) => item.type === 1)

  const saidas = list.filter((item) => item.type === 0)


  function calcSumTotal() {

    let sum = 0

    for (var i = 0; i < entradas.length; i++) {
      sum += entradas[i].pureValue;

      console.log('somaFor', sum)
    }

    

    setSumOfValues(sum)

  }

  function calcSubTotal() {

    let sub = 0

    for (var i = 0; i < saidas.length; i++) {
      sub += saidas[i].pureValue;

      console.log('-for', sub)
    }

    

    setSubOfValues(sub)

  }

  const [sumOfValues, setSumOfValues] = useState(0)
  const [subOfValues, setSubOfValues] = useState(0)
  const [load, setLoad] = useState(true)

  // console.log('Entradas', sumOfValues)
  // console.log('Saidas', subOfValues)



  useEffect(() => {
    window.addEventListener('focus', () => setLoad(!load))
    console.log('useEffect-teste')
   


  }, [load])
  return (
    <View style={styles.container}>
      <FlatList

        style={styles.list}
        data={list}
        keyExtrator={(item => String(item.id))}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <Movements data={item} />}

      />


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
