import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import Slide from "./Slide"
import { ActivityIndicator } from 'react-native';
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
    <View style={styles.subjectContainer}>
   
     {subjects.length>0?
      <FlatList
        data={subjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}


      
        numColumns={2}
      />:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={70} />
      </View>}
     
   
    </View>
  )
}

const styles=StyleSheet.create({
  subjectContainer:{
    flex:1,
    marginHorizontal:10,
    marginVertical:4,
    backgroundColor:'smokewhite'
    
  }

})
export default Subject
