import React ,{useEffect}from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import {UserCircleIcon } from "react-native-heroicons/outline";
import { collection, getDocsgetDoc, getFirestore, addDoc,query,where } from "firebase/firestore";
import { auth } from "../components/firebaseauth"


const UserProfile=({route,navigation})=> {



const {email}=route.params.data
console.log(email)

const getDocs=async ()=>{

  const db=getFirestore();
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where("email", "==", email))
  );
  
  // Process the results
  querySnapshot.forEach((doc) => {
    // Document data is available in doc.data()
    const data = doc.data();
    console.log("Document data:", data);
  });


  

}

useEffect(()=>{
  getDocs()
},[])



  return (
    <ScrollView>
    <View style={styles.container} >
      <View style={styles.imgcontainer} >
        <UserCircleIcon size={60} />
      </View>
       <View>
        <View style={styles.inputContainer}>
         
         <TextInput 
          style={styles.input}
          placeholder='Fisrtname'

         
         />
        </View>
       
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Lastname'
         
         />
        </View>
        <View style={styles.inputContainer}>
        
        <TextInput 
          style={styles.input}
          placeholder='Email'
         
         />
        </View>
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Phone No.'
         
         />
        </View>
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
       
       </View>
      
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
  
    
    marginTop:25,
    borderWidth:1,
    marginHorizontal:15,
    paddingHorizontal:25,
    borderRadius:20,
    padding:30,
  },
  inputContainer:{
    flex:1,
    display:'flex',
  
    marginVertical:7,
    backgroundColor:'green'
  },
  imgcontainer:{
    flex:1,
    display:'flex',
  
    alignItems:'center',
    marginVertical:15,
   
    marginHorizontal:15,
  

  }
 ,
 input:{
  height:35,
  backgroundColor:'#dee1e6',
  paddingHorizontal:15,


 },
 saveBtn:{
  padding:7,
  color:'white',
  backgroundColor:'green',
  paddingHorizontal:35,
  marginTop:15,

 },
 saveBtnContainer:{
  
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
 },
 text:{
  color:'white',
  fontWeight:'bold',
  fontSize:15,
 }
})

export default UserProfile
