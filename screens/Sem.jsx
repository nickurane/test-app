import React from 'react'
import {View,Text,FlatList,StyleSheet} from "react-native"
import {semDetails} from "./data"
import Slide from './Slide'
import SemSlide from './SemSlide'
import Subject from './Subject'

const Sem = ({navigation}) => {




  const renderItem = ({ item }) => {
    return < SemSlide item={item} navigation={navigation} />;
  };

  return (
    <View>
    <View>
    <Text>Semester</Text>
    </View>
    <FlatList
      data={semDetails}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.semContainer}
      
      numColumns={2}
    />
 
  </View>
  )
}
const styles=StyleSheet.create({
    semContainer:{
      flex:1,
      flexWrap:'wrap',
      
    }
  
  })

export default Sem
