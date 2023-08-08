import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import {UserCircleIcon } from "react-native-heroicons/outline";
const UserProfile=()=> {
  return (
    <View>
      <View style={styles.container} >
        <UserCircleIcon />
      </View>
    
      
    </View>
  )
}

const styles=StyleSheet.create({
container:{
  flex:1,
  alignItems:'center'
}
})

export default UserProfile
