import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Home from '../Home';
import ListExpense from '../../components/FlatListExpense';


export default function MoneyExpense() {
  return (
    <View style={styles.container}>
  
  <ListExpense></ListExpense>
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

  },

  cardActions: {
    width: 100,
    height: 100,
    backgroundColor: "#62615a",
    elevation: 5,
    borderRadius: 20,
    paddingTop: 10,
    margin: 14,
    justifyContent: 'space-between',
    opacity: 1,
    padding: 15,


  },
  textCard: {

    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -4,
    marginBottom: 14,
    color: '#DADADA'



  },
  actionButton:{
    marginRight: -10
  },
  areaButton:{
    display: 'flex',
    flexDirection: 'row'
  }
});
