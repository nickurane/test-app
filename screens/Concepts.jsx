import React ,{useState,useEffect}from 'react'
import {View,Text,StyleSheet,FlatList} from "react-native"
import {getConcepts} from "../components/firestore"
import ConceptSlide from './ConceptSlide'

const Concept = ({navigation,route}) => {

  const [concepts,setConcepts]=useState([])


 
  let {id,path}=route.params
  console.log("concepts",id,path)
 
    const getData=async (id,path)=>{
      let s= await getConcepts(id,path)
      console.log("concepts:",s);
      setConcepts(s)
      console.log(concepts)
     
    }
   
   
    useEffect(()=>{
    getData(route.params.id,route.params.path)
     
    },[])

    
  const renderItem1 = ({ item }) => {
    return <ConceptSlide item={item}  navigation={navigation} path={{'sub_id':path.sub_id,'sem_id':path.sem_id,'cha_id':id}}/>
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