import React from 'react'
import {View,Text,Stylesheet,TextInput} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Subject from "../screens/Subject"
import Topic from "../screens/Topic"

    const Drawer = createDrawerNavigator();

function Home() {
  return (
 
    <Drawer.Navigator>
    <Drawer.Screen name="Subject" component={Subject} />
    <Drawer.Screen name="Topic" component={Topic} />
  </Drawer.Navigator>

    
  )
}

export default Home
