import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {data} from "./data"
import ChapterSlide from './chapterSlide';


const renderItem = ({ item }) => {
    return <ChapterSlide item={item} navigation={navigation} />;
  };

const Chapter = () => {
  return (
    <View>
      <View>
      <Text>Chapters</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles. subjectContainer}
      
       
      />
   
    </View>
  )
}

const styles=StyleSheet.create({
    subjectContainer:{
      flex:1,
      flexWrap:'wrap',
      
    }
  
  })

export default Chapter
