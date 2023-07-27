import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const SemSlide = ({item,navigation}) => {
  

    
  return (
   <TouchableOpacity 
   onPress={() => navigation.navigate("Subject")}
   
   style={[styles.SemSlideContainer,{backgroundColor:'#5a228b'}]}>
    <View >
      <Text>{item.id}</Text>
       <Text>{item.sem}</Text>
     </View>
    </TouchableOpacity>

 
  )
}

const styles=StyleSheet.create({
    SemSlideContainer:{
        flex:1,
        backgroundColor:'blue',
        height:300,
        margin:2,
        justifyContent:'center',
        alignItems:'center'

    }
})
export default SemSlide
