import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from "react-native"
import { auth } from "./firebaseauth"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { TouchableOpacity } from 'react-native';

import Home from "./Home"

function Login({navigation,route}) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerNewUser = () => {


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate('Home')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  

  }

  const loginExistingUser=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    navigation.navigate('Home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }




  return (
    <View style={styles.container}>
 <Text>Login</Text>
      <View style={styles.loginContainer}>


       
        <TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Password" onChangeText={(text) => { setPassword(text) }} style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.button} 
        
        onPress={() => {loginExistingUser() }}
        >
          <View>
          <Text style={styles.btnTxt}>Login</Text>
          </View>
       
        </TouchableOpacity > 
         <TouchableOpacity 

          onPress={() => { registerNewUser() }}
          style={[styles.button, styles.outLinedBtn,]} >
            <Text style={styles.outlinebtnTxt}>Register</Text>
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
    height: '50%',
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

export default Login
