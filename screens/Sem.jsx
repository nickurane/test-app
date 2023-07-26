import React, { useState,useEffect } from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"

import {semDetails} from "./data"
import { setUp } from '../components/firestore'
import SemSlide from './SemSlide'


const Sem = ({navigation}) => {

  const [semester,setSem]=useState([])


  const getData=async ()=>{
    let s=await setUp()
    setSem(s)
    console.log(semester);
  }
 
 
  useEffect(()=>{
  getData()
   
  },[])

 console.log(semester)

  const renderItem = ({ item }) => {
    return < SemSlide item={item} navigation={navigation} />;
  };

  return (
    <View>
    <View>
    <Text>Semester hi </Text>
    </View>
    <View>
    {semester?
    <FlatList
      data={semDetails}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      
      
      numColumns={2}
    />:<> <h1>data not found</h1> </>}
 
  </View>
  </View>
  )
}
const styles=StyleSheet.create({
    semContainer:{
      flex:1,
      flexWrap:'wrap',
      height:300,
      
    }
  
  })

export default Sem
