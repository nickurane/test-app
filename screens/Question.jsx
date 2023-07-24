import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {question} from "./data"
import QuestionSlide from './QuestionSlide';




const Question= () => {




  const renderItem1 = ({ item }) => {
    return <QuestionSlide item={item} navigation={navigation} />
  };

  return (
    <View style={{flex:1}}>
    <View>
    <Text>Questions</Text>
    </View>
    <FlatList
      data={question}
      renderItem={renderItem1}
      keyExtractor={(item) => item.id}
    
      
      numColumns={1}
    />
 
  </View>
  )
}
const styles=StyleSheet.create({

  
  })

export default Question
