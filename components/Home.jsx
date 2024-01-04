import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Touchable} from "react-native"
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
import UserProfile from "../screens/UserProfile"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {UserCircleIcon ,ArrowLeftIcon} from "react-native-heroicons/outline";



    // const Drawer = createDrawerNavigator();
    const Stack = createNativeStackNavigator();
   

const Drawer = createDrawerNavigator();

function Home({navigation,route}) {

    

   const  data=route.params;

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
      //    
      route.name!="Semester"?
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
       <View style={{ padding: 10}}>
       <ArrowLeftIcon  size={20} color="white" />
       </View>
      </TouchableOpacity>:<></>

    

        
      ),
      headerRight: () => (
        // onPress={()=>{signOut()}}
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.navigate("UserProfile",{data:data})}} style={{ margin: 15}}>
        <UserCircleIcon size={35} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{logOut()}} style={{ margin: 15}}>
          <Text><Icon name="logout" size={23} color="white" /></Text>
        </TouchableOpacity>
        </View>
      )
    }}>
  
    
    <Stack.Screen name="Subject" component={Subject} 
  
    />
    <Stack.Screen name="Topic" component={Topic} />
    <Stack.Screen name="Semester" component={Sem} />
    <Stack.Screen name="Chapter" component={Chapter} />
    <Stack.Screen name="Concepts" component={Concept} />
    <Stack.Screen name="Question" component={Question} />
    <Stack.Screen name="UserProfile" component={UserProfile} />

 </Stack.Navigator>


</>

    
  )
}

const styles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row'
  }

})


export default Home
