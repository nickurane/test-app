import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {question} from "./data"
import Slide from './Slide'
import QuestionSlide from './QuestionSlide'


const Question= ({navigation}) => {




  const renderItem = ({ item }) => {
    return <QuestionSlide item={item} navigation={navigation} />;
  };

  return (
    <View>
    <View>
    <Text>Semester</Text>
    </View>
    <FlatList
      data={question}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.semContainer}
      
      numColumns={2}
    />
 
  </View>
  )
}
const styles=StyleSheet.create({
    semContainer:{
      flex:1,
      flexWrap:'wrap',
      
    }
  
  })

export default Question
