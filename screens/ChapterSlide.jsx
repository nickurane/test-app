import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const ChapterSlide= ({item,navigation,path}) => {
console.log("chapter slide path",path)
    
   
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:'#dee1e6'}]}
    onPress={()=>{navigation.navigate('Concepts',{"id":item.id,'path':path})}} 
    
    >
    <View style={styles.txtContainer} >

       <Text style={[styles.txt,{color:'black'}]}>{item.name}</Text>
   </View>
   </TouchableOpacity>
 
  )
}

const styles=StyleSheet.create({
  container:{
    height:50,
   
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    margin:3,
    borderRadius:4,
    borderWidth:1,
  },
  txtContainer:{
    
    display:'flex',
    flexDirection:'row',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    gap:5,

  }
  ,
  txt:{
    fontWeight:'bold',

    color:'white'
  }
})
export default ChapterSlide
