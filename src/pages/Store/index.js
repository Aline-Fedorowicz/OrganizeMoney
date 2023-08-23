import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Cashback from '../../components/Cashback';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'Milhas',
    value: 'Clique aqui',
    type: 0 //despesas
  },

  {
    id:2,
    label: 'Compras',
    value: 'Clique aqui',
    type: 1 //entradas
  },

  {
    id:3,
    label: 'Uber',
    value: 'Clique aqui',
    type: 1 //entradas
  },

  {
    id:3,
    label: 'Refeições',
    value: 'Clique aqui',
    type: 1 //entradas
  }

]


export default function Money() {
  return (
    <View style={styles.container}>
      <Header name="Aline Fedorowicz"/>
      <Text style={styles.title}>Cashbacks do Mybank </Text>
      <FlatList

      style={styles.list}
      data={list}
      keyExtrator={ (item => String (item.id))}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Cashback data={item}/> }
      
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
