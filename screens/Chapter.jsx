import React ,{useState,useEffect}from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {data} from "./data"
import ChapterSlide from './ChapterSlide';
import { getChapters } from '../components/firestore';




const Chapter = ({navigation,route}) => {
 
  const [chapters,setChapters]=useState([])

  console.log(route.params.id,route.params.path)



  const getData=async (id,path)=>{
    let s= await getChapters(id ,path)
    console.log("chapters:",s);
    setChapters(s)
    console.log(chapters)
   
  }
 
 
  useEffect(()=>{
  getData(route.params.id,route.params.path)
   
  },[])



















  const renderItem = ({ item }) => {
    return <ChapterSlide item={item} navigation={navigation} path={{'sem_id':route.params.path.sem_id,'sub_id':route.params.id}} />
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
