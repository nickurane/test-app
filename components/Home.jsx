import React from 'react'
import {View,Text,Stylesheet,TextInput} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Subject from "../screens/Subject"
import Topic from "../screens/Topic"
import Sem from "../screens/Sem"
import Chapter from "../screens/Chapter"
import Question from '../screens/Question';

    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();

function Home() {
  return (
 
  //  <Drawer.Navigator>
  //   <Drawer.Screen name="Semester" component={Sem} />
  //   <Drawer.Screen name="Subject" component={Subject} />
  //   <Drawer.Screen name="Topic" component={Topic} />

  // </Drawer.Navigator>
 
 
     <Stack.Navigator initialRouteName='Semester'
    screenOptions={{
  
    }}>
    
    <Stack.Screen name="Subject" component={Subject} />
    <Stack.Screen name="Topic" component={Topic} />
    <Stack.Screen name="Semester" component={Sem} />
    <Stack.Screen name="Chapter" component={Chapter} />
    <Stack.Screen name="Questions" component={Question} />
 </Stack.Navigator>


    
  )
}


export default Home
