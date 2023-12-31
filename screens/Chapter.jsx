import React ,{useState,useEffect}from 'react'
import {View,Text,FlatList,StyleSheet, ActivityIndicator} from "react-native"
import {data} from "./data"
import ChapterSlide from './ChapterSlide';
import { getChapters } from '../components/firestore';




const Chapter = ({navigation,route}) => {
 
  const [chapters,setChapters]=useState([])
 



  const getData=async (id,path)=>{
    let s= await getChapters(id ,path)
   
    setChapters(s)
  
   
  }
 
 
  useEffect(()=>{
  getData(route.params.id,route.params.path)
   
  },[])



















  const renderItem = ({ item }) => {
    return <ChapterSlide item={item} navigation={navigation} path={{'sem_id':route.params.path.sem_id,'sub_id':route.params.id}} />
  };



  return (
    <View style={styles.chapterContainer}>
      {chapters.length>0?
      <FlatList
        data={chapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       
      
       
      />:<>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={70} />
      </View>
      
      
      </>}
   
    </View>
  )
}

const styles=StyleSheet.create({
  chapterContainer:{
    flex:1,
    marginHorizontal:10,
    marginVertical:4,
    backgroundColor:'smokewhite'
  }

  })

export default Chapter
