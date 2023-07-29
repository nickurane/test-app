import React ,{useState,useEffect}from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {question} from "./data"
import QuestionSlide from './QuestionSlide';
import {getQuestions} from "../components/firestore"




const Question= () => {
const [correctAnswer,setCorrectAnswer]=useState(0)
const [wrongAnswer,setWrongAnswer]=useState(0)
const [questions,setQuestions]=useState([])



const getData=async ()=>{
  let s= await getQuestions()
  console.log("questions:",s);
  setQuestions(s)
  
 
}


useEffect(()=>{
getData()
 
},[])












  const renderItem1 = ({ item }) => {
    return <QuestionSlide item={item} setCorrectAnswer={setCorrectAnswer} setWrongAnswer={setWrongAnswer} />
  };

  return (
    <View style={{flex:1}}>
    <View style={styles.scoreContainer}>
    <Text style={styles.txtHeading}>Correct Answered:  {correctAnswer}</Text>
    <Text style={styles.txtHeading}>Wrong Answered:   {wrongAnswer}</Text>
    </View>
    <FlatList
      data={questions}
      renderItem={renderItem1}
      keyExtractor={(item) => item.id}
    
      
      numColumns={1}
    />
 
  </View>
  )
}
const styles=StyleSheet.create({
  scoreContainer:{
   
    borderColor:'black',
    padding:10,
   
    borderWidth:1,
    height:90,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:35,
    backgroundColor:'#5b238c'
  },
  txtHeading:{
    color:'white',
    fontWeight:'bold',
    


  }

  
  })

export default Question
