import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuestionSlide = ({item}) => {
  console.log(item)
  return (
    <View style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
        <View style={styles.optionContainer}>
          <View  style={styles.questionTxt}><MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" /><Text>{item.options.A}</Text></View>
          <View  style={styles.questionTxt}><MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" /><Text>{item.options.B}</Text></View>
          <View  style={styles.questionTxt}><MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" /><Text>{item.options.C}</Text></View>
          <View  style={styles.questionTxt}><MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" /><Text>{item.options.D}</Text></View>
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  questionContainer:{
   
    margin:'0.8rem',
    borderColor:'black',
    borderWidth:'1px',
    padding:'1rem',
    borderRadius:20,

   

  },
  optionContainer:{
    flex:1,
    flexDirection:'column',
    gap:10,
    marginVertical:10,
  }
  ,
  question:{
    fontWeight:'bold'
  },
  questionTxt:{
    gap:15,
    flexDirection:'row',
  }
})

export default QuestionSlide
