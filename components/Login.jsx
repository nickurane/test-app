import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,Image, ActivityIndicator} from "react-native"
import { auth } from "./firebaseauth"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { TouchableOpacity } from 'react-native';
import Avatar from "../assets/male_avatar.svg"
import { SvgUri } from 'react-native-svg';




function Login({navigation,route}) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloggedin,setISLoggedIn]=useState(true)
  const [error,setError]=useState(false)

  const registerNewUser = () => {
         

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     
      navigation.replace('Home')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
   
    });
  

  }




  const loginExistingUser=()=>{
    setISLoggedIn(false)
    setError(false)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    navigation.replace('Home',{email:email,password:password})
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setISLoggedIn(true)
    setError(true)
   
  });

  }

  




  return (
    <View style={styles.container}>
       {isloggedin==false?
         <ActivityIndicator />
        
          :<></>}

      <View style={styles.loginContainer}>
          <View>
              {/* <Avatar  style={{width:100,height:100,marginBottom:15,borderWidth:1.5,borderRadius:80}}  /> */}
              {/* <SvgUri
              style={{width:100,height:100,marginBottom:15,borderWidth:1.5,borderRadius:80}} 
  
    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
/> */}

          </View>
         
      
        <TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Password" onChangeText={(text) => { setPassword(text) }} style={styles.input} secureTextEntry />
        {error?
        <View>
          <Text style={{color:'red'}}>Wrong Username or Password</Text>
        </View>:<></>}
        <TouchableOpacity style={styles.button} 
        
        onPress={() => {loginExistingUser() }}
        >
          <View>
          <Text style={styles.btnTxt}>Login</Text>
          </View>
       
        </TouchableOpacity > 
         <TouchableOpacity 

          onPress={() => { navigation.replace('Register') }}
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
    marginHorizontal: 10,
    padding: 10,
    width: '80%',
  },
  loginContainer: {
    
    width: '85%',
   
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20,
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

export default Login
