import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import Question from './Question'

const ChapterSlide= ({item,navigation}) => {
    console.log(item)
    
   
  return (
    <TouchableOpacity style={[styles.slideContainer,{backgroundColor:item.id%2?'#5a228b':'#dae7e6'}]}
    
    onPress={()=>{

      navigation.navigate("Question")
    }}
    
    
    
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
       
        margin:2,
        padding:500,
        justifyContent:'center',
        alignItems:'cnter'

    }
})
export default ChapterSlide
