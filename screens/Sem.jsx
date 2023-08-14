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
    
  }
 
 
  useEffect(()=>{
  getData()
   
  },[])



  const renderItem = ({ item }) => {
    return < SemSlide item={item} navigation={navigation} />;
  };



  return (
    <>
     <View style={styles.semContainer}>
  
    {semester.length>0?
    
    <FlatList
      data={semester}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}


      numColumns={2}
    /> :
    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator size={50} />
    // </View>
    }
    </View>
 
 
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
