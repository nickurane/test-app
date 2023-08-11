import React, { useState,useEffect } from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import { ActivityIndicator } from 'react-native';

import {semDetails} from "./data"
import { setUp } from '../components/firestore'
import SemSlide from './SemSlide'


const Sem = ({navigation,route}) => {

  const [semester,setSem]=useState([])


  const getData=async ()=>{
    let s=await setUp()
    setSem(s)
    console.log(semester);
  }
 
 
  useEffect(()=>{
  getData()
   
  },[])

 console.log(route,navigation)

  const renderItem = ({ item }) => {
    return < SemSlide item={item} navigation={navigation} />;
  };



  return (
    <>
   
  
    {semester.length>0?
      <View style={styles.semContainer}>
    <FlatList
      data={semester}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}


      numColumns={2}
    /> </View>:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator size={70} />
    </View>}
 
 
  </>
  )
}
const styles=StyleSheet.create({
    semContainer:{
   
      marginHorizontal:10,
      marginVertical:4,
      backgroundColor:'smokewhite',
   

    
      
     
      
    }
  
  })

export default Sem
