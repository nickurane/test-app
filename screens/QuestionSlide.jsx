import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuestionSlide = ({item,setCorrectAnswer, setWrongAnswer}) => {
  console.log(item)
  const [option1,setOption1]=useState('')
  const [option2,setOption2]=useState('')
  const [option3,setOption3]=useState('')
  const [option4,setOption4]=useState('')
  const [disable,setDisable]=useState(false)
 
  return (
    <View style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
        <View style={[styles.optionContainer,]} >
          <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option1}]}
          onPress={()=>{
            if( item.options.A===item.correct_option)
           {
            setOption1('green')
            setCorrectAnswer(prev=>prev+1)
           }
           else
           {
            setOption1('red')
            setWrongAnswer(prev=>prev+1)

           }
      
       

           
           console.log("pressed")
           setDisable(true)
           }}
           disabled={disable}
          
          >
            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
            <Text>{item.options.A}
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option2}]}
          onPress={()=>{
            if( item.options.B===item.correct_option)
            {
             setOption2('green')
             setCorrectAnswer(prev=>prev+1)
            }
            else
            {
             setOption2('red')
             setWrongAnswer(prev=>prev+1)
 
            }
           setDisable(true)
          }}
          disabled={disable}
          
          >
            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
            <Text>{item.options.B}
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option3}]}
          onPress={()=>{
            if( item.options.C===item.correct_option)
            {
             setOption3('green')
             setCorrectAnswer(prev=>prev+1)
            }
            else
            {
             setOption3('red')
             setWrongAnswer(prev=>prev+1)
 
            }
            setDisable(true)
          }}
          disabled={disable}
          
          >
            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
            <Text>{item.options.C}
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option4}]}
          onPress={()=>{
            if( item.options.D===item.correct_option)
           {
            setOption4('green')
            setCorrectAnswer(prev=>prev+1)
           }
           else
           {
            setOption4('red')
            setWrongAnswer(prev=>prev+1)

           }
            setDisable(true)
          }}
          disabled={disable}
          
          >
            <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
            <Text>{item.options.D}
            </Text>
            
            </TouchableOpacity>
            {disable?
            <View style={styles.ansContainer}>
              <Text style={styles.ansContainerTxt}>Correct Answer:</Text>
             <Text style={styles.ansContainerTxt}>{item.correct_option}</Text> 
            </View>:<></>}
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  questionContainer:{
    margin:10,
    borderColor:'black',
    padding:10,
    borderRadius:20,
    borderWidth:1,
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

,
ansContainer:{
  
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'green',
  padding:5
},
ansContainerTxt:{
  color:'white',
  fontWeight:'bold'
}
})

export default QuestionSlide
