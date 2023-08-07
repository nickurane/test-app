import React ,{useState} from 'react'
import { View, Text, StyleSheet, TextInput,Image} from "react-native"
import { auth } from "./firebaseauth"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { TouchableOpacity } from 'react-native';
import male_avatar from "../assets/male_avatar.svg"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { collection,getDocsgetDoc ,getFirestore,addDoc} from "firebase/firestore";



function Register({navigation}) {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const [phoneNumber,setPhoneNumber]=useState(0)
const db = getFirestore();




const registerNewUser = async () => {

  const userRef = collection(db,'user');
  console.log(userRef);
  if(phoneNumber.length!=10)
  alert("wrong phone number")


 if(email && password && confirmPassword && firstname && lastname && phoneNumber)
 {

  let data={
    email:email,
    password:password,
    firstname:firstname,
    lastname:lastname
  }

   if(password===confirmPassword)
   {
    const userCredential=await createUserWithEmailAndPassword(auth, email, password)
    addDoc(userRef , data)
  .then((docRef) => {
    console.log("Document written with ID:");
  })
  .catch((error) => {
    console.error("Error adding document: ");
  });

      if(userCredential)
      {
        navigation.replace('Home')
      }



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
   
        <View>
            <Image source={male_avatar} style={{width:100,height:100,marginBottom:15,borderWidth:1.5,borderRadius:80}}  />
        </View>
        <TextInput placeholder="Firstname" onChangeText={text => setFirstname(text)} style={styles.input} />
        <TextInput placeholder="Lastname" onChangeText={text => setLastname(text)} style={styles.input} />
      <TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={styles.input} />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={10} // Set the maximum length of the input
       
        onChangeText={text => setPhoneNumber(text)}
        placeholder="+91"
      />
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
      flex:1,
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

export default Register;
