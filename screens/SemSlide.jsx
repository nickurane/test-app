import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const SemSlide = ({item,navigation}) => {
  
    
  return (
   <TouchableOpacity 
   onPress={() => navigation.navigate("Subject")}
   
   style={[styles.SemSlideContainer,{backgroundColor:item.id%2?'#5a228b':'#dae7e6'}]}>
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
        height:100,
        margin:2,

    }
})
export default SemSlide
