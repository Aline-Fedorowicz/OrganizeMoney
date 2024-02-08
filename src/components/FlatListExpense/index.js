import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../Header';
import Balance from '../Balance';
import Movements from '../Movements';
import Actions from '../Actions';
import { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import ModalExpense from '../ModalAddExpense';



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



const entradas = list.filter((item) => item.type === 1)  

const saidas = list.filter((item) => item.type === 0)



const sumOfValues = entradas.reduce((acumulator, entradas) => acumulator + entradas)
const subOfValues = saidas.reduce((acumulator, saidas) => acumulator + saidas)

// console.log('Gastos', subOfValues.value)
// console.log('Entradas', sumOfValues.value)





export default function ListExpense() {


const [load, setLoad] = useState(true)


useEffect (() => {
window.addEventListener('focus', () => setLoad(!load))


  
}, [load])
  return (
    <View style={styles.container}>
   
<Header name="Aline Fedorowicz"/>
      <ModalExpense/>
      <Text style={styles.title}>Últimas Saídas</Text>
      <FlatList

style={styles.list}
data={saidas}
keyExtrator={ (item => String (item.id))}
showsVerticalScrollIndicator={true}
renderItem={ ({item}) => <Movements data={item}/> }

/>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(44 44 44)',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    marginBottom: 25,
    marginTop: 25,
    color: '#DADADA'
  },

  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});
