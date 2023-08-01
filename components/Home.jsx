import React from 'react'
import {View,Text,Stylesheet,TextInput,TouchableOpacity, Touchable} from "react-native"
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
import { createDrawerNavigator } from '@react-navigation/drawer';



    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();
   

const Drawer = createDrawerNavigator();

function Home({navigation,route}) {



  // let {routes}=navigation.getState()
  

  const logOut=()=>{

    signOut(auth).then(() => {
      navigation.replace('Login')
      
    }).catch((error) => {
      // An error happened.
    });
  
  
}












  return (
   <>

 
     <Stack.Navigator initialRouteName='Semester'
    screenOptions={{
      headerStyle: { backgroundColor: '#6528F7' ,color:'white',
      flex:1,
      display:'flex',
        justifyContent:'center',
        alignItem:'center',
        padding:50,
        
    
    },
      headerTitleStyle : {
        color: 'white',
        textAlign:'center',
       
        
      },
      headerBackTitleStyle:{
        color:'white'
        
      },
      headerLeft: () => (
        route.name!="Semester"?
       <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <View style={{ padding: 10}}>
        <Icon name="back" size={20} color="white" />
        </View>
       </TouchableOpacity>:<></>

        
      ),
      headerRight: () => (
        // onPress={()=>{signOut()}}
        <TouchableOpacity onPress={()=>{logOut()}} style={{ padding: 10}}>
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

 {/* <Drawer.Navigator>
 <Drawer.Screen name="Semester" component={Sem} />

 <Stack.Screen name="Subject" component={Subject} 
  
    />
    <Drawer.Screen name="Topic" component={Topic} />
 
    <Drawer.Screen name="Chapter" component={Chapter} />
    <Drawer.Screen name="Concepts" component={Concept} />
    <Drawer.Screen name="Question" component={Question} />


 </Drawer.Navigator> */}























 </>

    
  )
}


export default Home
