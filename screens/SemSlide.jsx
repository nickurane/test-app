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
      <Image Source={first_year }
        style={styles.image}
       contentFit="cover"
       transition={1000}
      
      />
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
