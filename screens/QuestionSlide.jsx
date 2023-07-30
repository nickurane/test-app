import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons'; 

const QuestionSlide = ({item,setCorrectAnswer, setWrongAnswer}) => {

  const [option1,setOption1]=useState('')
  const [option2,setOption2]=useState('')
  const [option3,setOption3]=useState('')
  const [option4,setOption4]=useState('')
  const [disable,setDisable]=useState(false)
  const [isChecked,setIsChecked]=useState(false)
 
  return (
    <View style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
        <View style={[styles.optionContainer,]} >
{/*        
          <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option1}]}
          onPress={()=>{
            if( item.a===item.correct_answer)
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
             <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="white"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: " " }}
  iconComponent={
    <Ionicons
      name="ios-close" 
      style={{color:'white'}}
      size={24}
      color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
    />}

/>
          
            <Text>{item.a}
            </Text>
            
            </TouchableOpacity>
           
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option2}]}
          onPress={()=>{
            if( item.b===item.correct_answer)
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
          <BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}

/>
            <Text>{item.b}
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option3}]}
          onPress={()=>{
            if( item.c===item.correct_answer)
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
          <BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}

/>
            <Text>{item.c}
            </Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.questionTxt,{backgroundColor:option4}]}
          onPress={()=>{
            if( item.d===item.correct_answer)
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
          <BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
 
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
 
/>
            <Text>{item.d}
            </Text>
            
            </TouchableOpacity> */}
   <BouncyCheckbox
  size={25}
  fillColor={option1}
  unfillColor="#FFFFFF"
  style={[styles.questionTxt]}
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={[{ textDecorationLine:'none',fontSize:15, },styles.optionContainerTxt]}
  text={item.a}
  onPress={()=>{
    if( item.a===item.correct_answer)
   {
    setOption1('green')
    setCorrectAnswer(prev=>prev+1)
   }
   else
   {
    setOption1('red')
    setWrongAnswer(prev=>prev+1)

   }
    setDisable(true)
  }}
  iconComponent={
    item.a!=item.correct_answer?
    <Ionicons
      name="close" 
      style={{color:'white'}}
      size={15}
      color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
    />:<Ionicons
    name="checkmark" 
    style={{color:'white',fontWeight:'bold'}}
    size={15}
    
    color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
  />}
  disabled={disable}
 
 
/>

<BouncyCheckbox
  size={25}
  fillColor={option2}
  unfillColor="#FFFFFF"
  style={[styles.questionTxt]}
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={[{ textDecorationLine:'none',fontSize:15, },styles.optionContainerTxt]}
  text={item.b}
  onPress={()=>{
    if( item.b===item.correct_answer)
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
  iconComponent={
    item.b!=item.correct_answer?
    <Ionicons
      name="close" 
      style={{color:'white'}}
      size={15}
      color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
    />:<Ionicons
    name="checkmark" 
    style={{color:'white',fontWeight:'bold'}}
    size={15}
    
    color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
  />}
  disabled={disable}
 
 
/>



<BouncyCheckbox
  size={25}
  fillColor={option3}
  unfillColor="#FFFFFF"
  style={[styles.questionTxt]}
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={[{ textDecorationLine:'none',fontSize:15, },styles.optionContainerTxt]}
  text={item.c}
  onPress={()=>{
    if( item.c===item.correct_answer)
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
  iconComponent={
    item.c!=item.correct_answer?
    <Ionicons
      name="close" 
      style={{color:'white'}}
      size={15}
      color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
    />:<Ionicons
    name="checkmark" 
    style={{color:'white',fontWeight:'bold'}}
    size={15}
    
    color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
  />}
  disabled={disable}
 
 
/>





<BouncyCheckbox
  size={25}
  fillColor={option4}
  unfillColor="#FFFFFF"
  style={[styles.questionTxt]}
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={[{ textDecorationLine:'none',fontSize:15, },styles.optionContainerTxt]}
  text={item.d}
  onPress={()=>{
    if( item.d===item.correct_answer)
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
  iconComponent={
    item.d!=item.correct_answer?
    <Ionicons
      name="close" 
      style={{color:'white'}}
      size={15}
      color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
    />:<Ionicons
    name="checkmark" 
    style={{color:'white',fontWeight:'bold'}}
    size={15}
    
    color={isChecked ? '#FFFFFF' : '#000000'} // Change this color to the color you want for the cross icon
  />}
  disabled={disable}
 
 
/>




































































            
            {disable?
            <View style={styles.ansContainer}>
              <Text style={styles.ansContainerTxt}>Correct Answer:</Text>
             <Text style={styles.ansContainerTxt}>{item.correct_answer}</Text> 
            </View>:<></>}
        </View>
      </View>
  )
}
const styles=StyleSheet.create({
  questionContainer:{
    margin:10,
    borderColor:'black',
    padding:20,
    borderRadius:10,
    borderWidth:1,
    flex:1,
    justifyContent:'center',
    backgroundColor:'#dae7e6'

  },
  optionContainer:{
    flex:1,
    flexDirection:'column',
    gap:10,
    marginTop:40,
  }
  ,
  question:{
    fontWeight:'bold'
  },
  questionTxt:{
    flex:1,
    flexDirection:'row',
    padding:8,
    borderRadius:5,
    borderWidth:2,
  }

,
ansContainer:{
  
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'green',
  paddingVertical:15,
  borderRadius:9,
},
ansContainerTxt:{
  color:'white',
  fontWeight:'bold'
},
optionContainerTxt:{
  color:'black',
 
}

})

export default QuestionSlide
