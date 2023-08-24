import 'react-native-reanimated'
import {NavigationContainer} from '@react-navigation/native'
import {Routes} from './src/routes'
import React from 'react'
import { StatusBar } from 'react-native'


export default function App() {
  return (
  <NavigationContainer>
    <StatusBar backgroundColor="rgb(118 39 20)" barStyle='dark-content'/>
  
    <Routes/>

  </NavigationContainer>
  );
}

