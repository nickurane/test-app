import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import Slide from "./Slide"

import {getSubjects} from "../components/firestore"

const Subject = ({navigation,route}) => {


  const [subjects,setSubjects]=useState([])

   console.log(route.params.id)

  const getData=async (id)=>{
    let s= await getSubjects(id)
    console.log("subject:",s);
    setSubjects(s)
   
  }
 
 
  useEffect(()=>{
  getData(route.params.id)
   
  },[])

  
  const renderItem = ({ item }) => {
    return <Slide item={item} navigation={navigation} path={{"sem_id":route.params.id}}/>;
  };


  return (
    <View>
      <View>
      <Text>Subject</Text>
      </View>
      {/* <View style={styles.subjectContainer}> */}
      <FlatList
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}


      
        numColumns={2}
      />
      {/* </View> */}
   
    </View>
  )
}

const styles=StyleSheet.create({
  subjectContainer:{
    flex:1,
    flexWrap:'wrap',
    backgroundColor:'green'
    
  }

})
export default Subject
