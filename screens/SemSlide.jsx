import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const SemSlide = ({item,navigation}) => {
  

    
  return (
   <TouchableOpacity 
   onPress={() => navigation.navigate("Subject",{"id":item.id})}
   
   style={[styles.SemSlideContainer,{backgroundColor:'#5b238c'}]}>
    <View >
     <Text style={styles.headingTxt}>{item.sem} Sem</Text>
     </View>
    </TouchableOpacity>

 
  )
}

const styles=StyleSheet.create({
    SemSlideContainer:{
  
  
    
     
      flex:1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:100,
      margin:1,


    }
    ,headingTxt:{
      color:'white',
      fontWeight:'bold',
      fontSize:15
    }
})
export default SemSlide
