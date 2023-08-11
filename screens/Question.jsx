import React ,{useState,useEffect}from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"

import QuestionSlide from './QuestionSlide';
import {getQuestions} from "../components/firestore"
import { ActivityIndicator } from 'react-native';



const Question= ({route}) => {
  
const [correctAnswer,setCorrectAnswer]=useState(0)
const [wrongAnswer,setWrongAnswer]=useState(0)
const [questions,setQuestions]=useState([])

let {id,path}=route.params;
console.log(id,path)

const getData=async (id,path)=>{
  let s= await getQuestions(id,path)
  console.log("questions:",s);
setQuestions(s)
  console.log(questions)
 
}


useEffect(()=>{
getData(id,path)
 
},[])


























  const renderItem1 = ({ item }) => {
    return <QuestionSlide item={item} setCorrectAnswer={setCorrectAnswer} setWrongAnswer={setWrongAnswer} />
  };

  return (
    <View style={{flex:1,
      marginHorizontal:10,
      marginVertical:4,}}>
    <View style={styles.scoreContainer}>
    <Text style={styles.txtHeading}>Correct Answered:  {correctAnswer}</Text>
    <Text style={styles.txtHeading}>Wrong Answered:   {wrongAnswer}</Text>
    </View>
    {questions.length>0?
    <FlatList
      data={questions}
      renderItem={renderItem1}
      keyExtractor={(item) => item.id}
    
      
      numColumns={1}
    />:<>  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <ActivityIndicator size={70} />
    </View></>}
 
  </View>
  )
}
const styles=StyleSheet.create({
  scoreContainer:{
   
    borderColor:'black',
    padding:10,
    borderRadius:10,
    borderWidth:1,
    height:90,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:35,
    backgroundColor:'#6528f7'
  },
  txtHeading:{
    color:'white',
    fontWeight:'bold',
    


  }

  
  })

export default Question
