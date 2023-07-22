import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const Slide = ({item,navigation}) => {
    console.log(item)
    
   
  return (
    <TouchableOpacity style={[styles.slideContainer,{backgroundColor:item.id%2?'#5a228b':'#dae7e6'}]}
    
    onPress={()=>{navigation.navigate("Chapter")}}
    
    
    
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

    }
})
export default Slide
