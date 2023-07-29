import React from 'react'
import {View,Text,Stylesheet,TextInput} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Subject from "../screens/Subject"
import Topic from "../screens/Topic"
import Sem from "../screens/Sem"
import Chapter from "../screens/Chapter"
import Question from '../screens/Question';
import Concept from "../screens/Concepts"

    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();

function Home() {
  return (
 
 
 
 
     <Stack.Navigator initialRouteName='Semester'
    screenOptions={{
      cardOverlayEnabled:true,
  
    }}>
    
    <Stack.Screen name="Subject" component={Subject} />
    <Stack.Screen name="Topic" component={Topic} />
    <Stack.Screen name="Semester" component={Sem} />
    <Stack.Screen name="Chapter" component={Chapter} />
    <Stack.Screen name="Concepts" component={Concept} />
    <Stack.Screen name="Question" component={Question} />

 </Stack.Navigator>


    
  )
}


export default Home
