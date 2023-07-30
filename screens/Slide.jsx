import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const Slide = ({item,navigation,path}) => {
   console.log(path)
    
   
  return (
    <TouchableOpacity style={[styles.slideContainer]}
    
    onPress={()=>{navigation.navigate("Chapter",{"id":item.id,"path":path})}}
    
    
    
    >
    <View >
      
       <Text style={styles.headingTxt}>{item.name}</Text>
   </View>
   </TouchableOpacity>
 
  )
}

const styles=StyleSheet.create({
    slideContainer:{
        borderRadius:5,
        borderWidth:1,
        margin:3.5,
        backgroundColor:'#dae7e6',
        flex:1,
        
        justifyContent:'center',
       alignItems:'center',
        height:100,
      
     

    }, headingTxt:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
      }
})
export default Slide
