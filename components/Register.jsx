import React ,{useState} from 'react'
import { View, Text, StyleSheet, TextInput,Image} from "react-native"
import { auth } from "./firebaseauth"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { TouchableOpacity } from 'react-native';
import male_avatar from "../assets/male_avatar.svg"
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Register({navigation}) {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const db = firebase.firestore();



console.log(navigation)
const registerNewUser = () => {

  const userRef = db.collection('user');


 if(email && password && confirmPassword && firstname && lastname )
 {

   if(password===confirmPassword)
   {




    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const newUser = {
     firstname:firstname,
     lastname:lastname,
     email:email,
     password:password,
    };
    userRef.add(newUser)
  .then((docRef) => {
    console.log('Document added with ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document:', error);
    navigation.replace('Login')
  });

  navigation.replace('Home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

   }
   else
   {
    alert("password not matching")
   }
  
}
else
{
  alert("please enter all the feilds")
  
}


}





  return (
    <View style={styles.container}>

    <View style={styles.loginContainer}>
    <Text></Text>
        <View>
            <Image source={male_avatar} style={{width:100,height:100,marginBottom:15,borderWidth:1.5,borderRadius:80}}  />
        </View>
        <TextInput placeholder="Firstname" onChangeText={text => setFirstname(text)} style={styles.input} />
        <TextInput placeholder="Lastname" onChangeText={text => setLastname(text)} style={styles.input} />
      <TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={styles.input} />
      <TextInput placeholder="Password" onChangeText={(text) => { setPassword(text) }} style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirm Password" onChangeText={(text) => { setConfirmPassword(text) }} style={styles.input} secureTextEntry />
    
   
       <TouchableOpacity 

        onPress={() => { registerNewUser() }}
        style={[styles.button, styles.button,]} >
          <Text style={styles.btnTxt}>Register</Text>
          </TouchableOpacity >
          <TouchableOpacity 

onPress={() => { navigation.replace('Login') }}
style={[styles.button, styles.outLinedBtn,]} >
  <Text style={styles.outlinebtnTxt}>Login</Text>
  </TouchableOpacity > 
       
        
    </View>
    

  </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      marginVertical: 5,
      marginHorizontal: 20,
      padding: 10,
      width: '80%',
    },
    loginContainer: {
      width: '85%',
      height: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 25,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'black',
    },
    button: {
      marginTop: 7,
      backgroundColor: '#383CC1',
      width: '80%',
      textAlign: 'center',
      padding: 10,
      borderRadius: 7,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
    },
    outLinedBtn: {
      backgroundColor: 'white',
      borderColor: '#383CC1',
      marginTop: 7,
      borderWidth: 2,
      width: '80%',
      textAlign: 'center',
      padding: 10,
      borderRadius: 7,
    },
    outlinebtnTxt: {
      color: '#383CC1',
      fontWeight: 'bold',
    },
  });

export default Register
