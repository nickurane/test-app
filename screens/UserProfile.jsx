import React ,{useEffect,useState}from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import {UserCircleIcon } from "react-native-heroicons/outline";
import { collection, getDocs,getDoc, getFirestore, addDoc,query,where } from "firebase/firestore";
import { auth } from "../components/firebaseauth"


const UserProfile=({route,navigation})=> {

  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)

const {email}=route.params.data
console.log(email)

const getDocument=async ()=>{
  try {
    const db=getFirestore();
    const userRef=collection(db, "user")
    console.log(userRef)
    const q=  query(userRef, where("email", "==", email))
    console.log(q)
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    
    // Process the results
    querySnapshot?.forEach((doc) => {
      // Document data is available in doc.data()
      const data = doc.data();
      console.log("Document data:", data);
     if(data)
     {
      setEmailid(data?.email)
      setFirstname(data?.firstname)
      setLastname(data?.lastname)
      setPhoneNumber(data.phoneNumber)


     }
    });
  
  
  } catch (error) {
    console.error("An error occurred:", error);
  }
  
  
  

}

useEffect(()=>{
  getDocument()
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
         value={firstname.toUpperCase()}
         
         />
        </View>
       
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Lastname'
          value={lastname.toUpperCase()}
         
         />
        </View>
        <View style={styles.inputContainer}>
        
        <TextInput 
          style={styles.input}
          placeholder='Email'
          value={emailid}
         
         />
        </View>
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Phone No.'
          value={phoneNumber}
         
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
