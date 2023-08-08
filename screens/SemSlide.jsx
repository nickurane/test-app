import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from "react-native"
// import { Image } from 'expo-image';
import first_year from "../assets/first_year.svg"

const SemSlide = ({item,navigation}) => {
  
  

    
  return (
   <TouchableOpacity 
   onPress={() => navigation.navigate("Subject",{"id":item.id})}
   
   style={[styles.SemSlideContainer]}>
    <View >
   
     <Text style={styles.headingTxt}>{item.sem} Sem</Text>
    
     </View>
    </TouchableOpacity>

 
  )
}

const styles=StyleSheet.create({
    SemSlideContainer:{
  
  
      borderRadius:5,
      borderWidth:1,
      margin:3.5,
      backgroundColor:'#dee1e6',
      flex:1,
      
      justifyContent:'center',
     alignItems:'center',
      height:100,
      
     


    }
    ,headingTxt:{
      color:'black',
      fontWeight:'bold',
      fontSize:15
    },
    image: {
      flex: 1,
      width: '14rem',
      height:'14rem',
      backgroundColor: 'green',
    },
})
export default SemSlide
