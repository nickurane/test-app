import React from 'react'
import {View,Text,Stylesheet,TextInput,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from "./firebaseauth"
import { getAuth, signOut } from "firebase/auth";

import Subject from "../screens/Subject"
import Topic from "../screens/Topic"
import Sem from "../screens/Sem"
import Chapter from "../screens/Chapter"
import Question from '../screens/Question';
import Concept from "../screens/Concepts"




    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();

function Home({navigation}) {

  const logOut=()=>{

    signOut(auth).then(() => {
      navigation.replace('Login')
      
    }).catch((error) => {
      // An error happened.
    });
  
  
}












  return (
 

 
     <Stack.Navigator initialRouteName='Semester'
    screenOptions={{
<<<<<<< HEAD
      cardOverlayEnabled:true,
  
    }}>
=======
      headerStyle: { backgroundColor: '#6528F7' ,color:'white',
      flex:1,
      display:'flex',
        justifyContent:'center',
        alignItem:'center',
>>>>>>> b90470b8724cabde542417a24497caf40aa74863
    
    
    },
      headerTitleStyle : {
        color: 'white',
        
        
      },
      headerRight: () => (
        // onPress={()=>{signOut()}}
        <TouchableOpacity style={{marginHorizontal:45}} onPress={()=>{logOut()}} >
          <Text><Icon name="logout" size={20} color="white" /></Text>
        </TouchableOpacity>
      )
    }}>
  
    
    <Stack.Screen name="Subject" component={Subject} 
  
    />
    <Stack.Screen name="Topic" component={Topic} />
    <Stack.Screen name="Semester" component={Sem} />
    <Stack.Screen name="Chapter" component={Chapter} />
    <Stack.Screen name="Concepts" component={Concept} />
    <Stack.Screen name="Question" component={Question} />

 </Stack.Navigator>

 

    
  )
}


export default Home
