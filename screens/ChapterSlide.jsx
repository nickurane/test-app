import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const ChapterSlide= ({item,navigation}) => {

    
   
  return (
    <TouchableOpacity style={[{backgroundColor:item.id%2?'#5a228b':'#dae7e6'}]}
    onPress={()=>{navigation.navigate('Question')}} 
    
    >
    <View >
       <Text>{item.id}</Text>
       <Text>{item.name}</Text>
   </View>
   </TouchableOpacity>
 
  )
}

const styles=StyleSheet.create({
  
})
export default ChapterSlide
