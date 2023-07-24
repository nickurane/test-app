import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {data} from "./data"
import ChapterSlide from './chapterSlide';




const Chapter = ({navigation}) => {


  const renderItem = ({ item }) => {
    return <ChapterSlide item={item} navigation={navigation} />;
  };



  return (
    <View>
      <View>
      <Text>Chapters</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       
      
       
      />
   
    </View>
  )
}

const styles=StyleSheet.create({

  })

export default Chapter
