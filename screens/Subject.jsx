import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import Slide from "./Slide"
import {data} from "./data"

const Subject = ({navigation}) => {


  const renderItem = ({ item }) => {
    return <Slide item={item} navigation={navigation} />;
  };


  return (
    <View>
      <View>
      <Text>Subject</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       
      
        numColumns={2}
      />
   
    </View>
  )
}

const styles=StyleSheet.create({
  subjectContainer:{
    flex:1,
    flexWrap:'wrap',
    
  }

})
export default Subject
