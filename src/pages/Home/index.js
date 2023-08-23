import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'UberTrip',
    value: '45,00',
    date: '17/12/2023',
    type: 0 //despesas
  },

  {
    id:2,
    label: 'Pix Aline',
    value: '2.500,00',
    date: '17/12/2023',
    type: 1 //entradas
  },

  {
    id:3,
    label: 'Salário',
    value: '10.500,00',
    date: '18/12/2023',
    type: 1 //entradas
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Aline Fedorowicz"/>
      <Balance saldo="2,45" gastos="-400,00"/>
      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList

      style={styles.list}
      data={list}
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
