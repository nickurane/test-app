import React ,{useState,useEffect}from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const ConceptSlide = ({navigation,item,path}) => {



 







  return (
    <TouchableOpacity style={[styles.slideContainer]}
    
    onPress={()=>{navigation.navigate("Question",{"id":item.id,'path':path})}}
    
    
    
    >
    <View style={styles.  txtContainer} >
     
       <Text style={styles.containerTxt} >{item.name}</Text>
   </View>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    slideContainer:{
      height:50,
      backgroundColor:'#dee1e6',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      margin:3,
      borderRadius:4,
      borderWidth:1,
    },
    txtContainer:{
    
      flex:1,
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      gap:5,
  
    },
    containerTxt:{
      fontWeight:'bold'
    }
})
export default ConceptSlide
