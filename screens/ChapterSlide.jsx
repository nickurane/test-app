import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const ChapterSlide= ({item,navigation}) => {
// console.log(navigation)
    
   
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:item.id%2?'#5a228b':'#dae7e6'}]}
    onPress={()=>{navigation.navigate('Question')}} 
    
    >
    <View style={styles.txtContainer} >
       <Text style={[styles.txt,{color:item.id%2?'white':'black'}]}>{item.id}</Text>
       <Text style={[styles.txt,{color:item.id%2?'white':'black'}]}>{item.name}</Text>
   </View>
   </TouchableOpacity>
 
  )
}

const styles=StyleSheet.create({
  container:{
    height:70,
    margin:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
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
    fontSize:16,
    color:'white'
  }
})
export default ChapterSlide
