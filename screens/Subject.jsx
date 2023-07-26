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
      {/* <View style={styles.subjectContainer}> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
<<<<<<< HEAD
        
=======
       
>>>>>>> 76fc91e4e458fce87db915fbf74c26131ecd9f35
      
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
    
  }

})
export default Subject
