import React ,{useEffect,useState}from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import {UserCircleIcon, } from "react-native-heroicons/outline";
import {PencilIcon, } from "react-native-heroicons/outline";
import { collection, getDocs,getDoc, getFirestore, addDoc,query,where,doc,updateDoc ,update} from "firebase/firestore";
import { auth } from "../components/firebaseauth"



const UserProfile=({route,navigation})=> {

  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)


  
  const [ statusemailid, statusSetEmailid] = useState(true)
  const [ statuspassword, statusSetPassword] = useState(true)
  const [ statusfirstname, statusSetFirstname] = useState(true)
  const [ statuslastname, statusSetLastname] = useState(true)
  const [ statusphoneNumber, statusSetPhoneNumber] = useState(true)


const {email}=route.params.data

const db=getFirestore();
const userRef=collection(db, "user")

const getDocument=async ()=>{
  try {
 
  
    const q=  query(userRef, where("email", "==", email))
    
    const querySnapshot = await getDocs(q);
    
    
    // Process the results
    querySnapshot?.forEach((doc) => {
      // Document data is available in doc.data()
      const data = doc.data();
     
     if(data)
     {
      setEmailid(data?.email)
      setFirstname(data?.firstname)
      setLastname(data?.lastname)
      setPhoneNumber(data?.phoneNumber)


     }
    });
  
  
  } catch (error) {
    console.error("An error occurred:", error);
  }
  
  
  

}

useEffect(()=>{
  getDocument()
},[])


const updateUserDoc = async () => {
  const userQuery = query(userRef, where("email", "==", email));

  try {
    const querySnapshot = await getDocs(userQuery);

    querySnapshot.forEach((doc) => {
      // Document data is available in doc.data()
      const documentId = doc.id;
      const documentRef = doc.ref; // Use the retrieved document's ref

      const updateData = {
        firstname: firstname,
        lastname: lastname,
        email: emailid,
        phoneNumber: phoneNumber,
      };

      // Use the update function on the document reference
      updateDoc(documentRef, updateData)
        .then(() => {
          alert("Document successfully updated!");
        })
        .catch((error) => {
          alert("Error updating document: ", error);
        });
    });
  } catch (error) {
    console.error("Error querying document: ", error);
  }
};




  return (
    <ScrollView>
    <View style={styles.container} >
     
      <View style={styles.imgcontainer} >
        <UserCircleIcon size={80} color="black" />
      </View>
       <View>
       <View style={styles.inputContainer}>
        
        <TextInput 
          style={styles.input}
          placeholder='Email'
          onChangeText={(text)=>{setEmailid(text)}}
          disabled={true}
          value={emailid}
         
         />
          
          
        </View>
        <View style={styles.inputContainer}>
         
         <TextInput 
          style={styles.input}
          placeholder='Fisrtname'
          onChangeText={(text)=>{setFirstname(text)}}
          disabled={statusfirstname}
          value={firstname.toUpperCase()}
         
         />
         <TouchableOpacity onPress={()=>{statusSetFirstname?statusSetFirstname(false):statusSetFirstname(true)}}>
          <PencilIcon size={19}  />
         </TouchableOpacity>
        
     
    
         
        </View>
       
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Lastname'
          onChangeText={(text)=>{setLastname(text)}}
          disabled={statuslastname}
          value={lastname.toUpperCase()}
         
         />
          <TouchableOpacity onPress={()=>{statusSetLastname(false)}}>
            <PencilIcon size={19} />
          </TouchableOpacity>
          
        </View>
      
        <View style={styles.inputContainer}>
       
        <TextInput 
          style={styles.input}
          placeholder='Phone No.'
          onChangeText={(text)=>{setPhoneNumber(text)}}
          disabled={statusphoneNumber}
          value={String(phoneNumber)}
         
         />
          <TouchableOpacity onPress={()=>{statusSetPhoneNumber(false)}}>
            <PencilIcon size={19} />
          </TouchableOpacity>
      
          
        </View>
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={styles.saveBtn} onPress={()=>{updateUserDoc()}}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
       
       </View>
       <View>
        
      </View>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   
    backgroundColor:'#f2f2f2',
    
    marginTop:25,
    borderWidth:1,
    marginHorizontal:15,
    paddingHorizontal:25,
    borderRadius:20,
    padding:30,
  },
  inputContainer:{
    flex:1,
    
    flexDirection:'row',
    alignItems:'center',
  
    marginVertical:7,
   
  },
  imgcontainer:{
    flex:1,
   
  
    alignItems:'center',
    marginVertical:15,
   
    marginHorizontal:15,
  

  }
 ,
 input:{
  height:35,
  backgroundColor:'#dee1e6',
  paddingHorizontal:15,
  flex:1,
  color:'black'


 },
 saveBtn:{
  padding:7,
  color:'white',
  backgroundColor:'green',
  paddingHorizontal:35,
  marginTop:15,
  width:'100%',
  flex:1,
  
  justifyContent:'center',
  alignItems:'center',
  

 },
 saveBtnContainer:{
  flex:1,

  justifyContent:'center',
  alignItems:'center',
 },
 text:{
  color:'white',
  fontWeight:'bold',
  fontSize:15,
  textAlign:'center'
 }
})

export default UserProfile
