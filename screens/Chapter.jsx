import React ,{useState,useEffect}from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {data} from "./data"
import ChapterSlide from './ChapterSlide';
import { getChapters } from '../components/firestore';




const Chapter = ({navigation,route}) => {
 
  const [chapters,setChapters]=useState([])
  console.log(route,navigation)

  const getData=async (id)=>{
    let s= await getChapters(id)
   
    setChapters(s)
  
   
  }
 
 
  useEffect(()=>{
  getData(route.params.id)
   
  },[])



















  const renderItem = ({ item }) => {
    return <ChapterSlide item={item} navigation={navigation} />
  };



  return (
    <View>
      <View>
      <Text>Chapters</Text>
      </View>
      <FlatList
        data={chapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       
      
       
      />
   
    </View>
  )
}

const styles=StyleSheet.create({

  })

export default Chapter
