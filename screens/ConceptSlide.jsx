import React ,{useState,useEffect}from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const ConceptSlide = ({navigation,item}) => {



 







  return (
    <TouchableOpacity style={[styles.slideContainer,{backgroundColor:'#5b238c'}]}
    
    onPress={()=>{navigation.navigate("Question",{"id":item.id})}}
    
    
    
    >
    <View >
       <Text>{item.id}</Text>
       <Text>{item.name}</Text>
   </View>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    slideContainer:{
        flex:1,
        backgroundColor:'blue',
        height:150,
        margin:2,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default ConceptSlide
