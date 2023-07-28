import React ,{useState,useEffect}from 'react'
import {View,Text,StyleSheet,FlatList} from "react-native"
import {getConcepts} from "../components/firestore"
import ConceptSlide from './ConceptSlide'

const Concept = ({navigation,route}) => {

  const [concepts,setConcepts]=useState([])


    const getData=async ()=>{
      let s= await getConcepts()
      console.log("concepts:",s);
      setConcepts(s)
      console.log(concepts)
     
    }
   
   
    useEffect(()=>{
    getData()
     
    },[])

    
  const renderItem1 = ({ item }) => {
    return <ConceptSlide item={item}  navigation={navigation} />
  };


  return (
    <View>
    <View>
    <Text>Concepts</Text>
    </View>
    <FlatList
      data={concepts}
      renderItem={renderItem1}
      keyExtractor={(item) => item.id}
     
     
     
    />
 
  </View>
  )
}

export default Concept