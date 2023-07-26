import React ,{useState}from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {question} from "./data"
import QuestionSlide from './QuestionSlide';




const Question= () => {
const [correctAnswer,setCorrectAnswer]=useState(0)
const [wrongAnswer,setWrongAnswer]=useState(0)





  const renderItem1 = ({ item }) => {
    return <QuestionSlide item={item} setCorrectAnswer={setCorrectAnswer} setWrongAnswer={setWrongAnswer} />
  };

  return (
    <View style={{flex:1}}>
    <View>
    <Text>Correct Answered:{correctAnswer}</Text>
    <Text>Wrong Answered:{wrongAnswer}</Text>
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
