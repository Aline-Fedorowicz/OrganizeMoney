import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'



const list = [
  {
    id:1,
    label: 'UberTrip',
    value: 45.00,
    date: '17/12/2023',
    type: 0 //despesas
  },

  {
    id:2,
    label: 'Pix Aline',
    value: 2500.00,
    date: '17/12/2023',
    type: 1 //entradas
  },

  {
    id:3,
    label: 'Salário',
    value: 10500.00,
    date: '18/12/2023',
    type: 1 //entradas
  }
]



const entradas = list.filter((item) => item.type === 1)  

const saidas = list.filter((item) => item.type === 0)



const sumOfValues = entradas.reduce((acumulator, entradas) => acumulator + entradas)
const subOfValues = saidas.reduce((acumulator, saidas) => acumulator + saidas)

console.log('Gastos', subOfValues.value)
console.log('Entradas', sumOfValues.value)





export default function ListExpense() {


const [load, setLoad] = useState(true)


useEffect (() => {
window.addEventListener('focus', () => setLoad(!load))
console.log('ENTROOU')

  
}, [load])
  return (
    <View style={styles.container}>
   
<Header name="Aline Fedorowicz"/>
      <Balance saldo={sumOfValues.value} gastos={subOfValues.value}/>
      <FlatList

style={styles.list}
data={saidas}
keyExtrator={ (item => String (item.id))}
showsVerticalScrollIndicator={false}
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
