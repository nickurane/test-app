import React from 'react'
import {View,Text,StyleSheet,TextInput} from "react-native"

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.input} />
      <TextInput  style={styles.input} />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:'center',
},
    input:{
        borderWidth:50,
        border:'solid 1px black',
        backgroundColor:'white',
    }
})

export default Login
