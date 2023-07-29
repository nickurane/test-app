import { collection, getFirestore,getDocs,query,where,onSnapshot,getDoc,collectionGroup } from "firebase/firestore";

const setUp = async () => {
  let sem = [];
  //connect to the database
  const db = getFirestore();
  //collection ref.
  const collection_ref = collection(db, "sem");

  try {
    const snapshot = await getDocs(collection_ref);
    snapshot.docs.forEach((doc) => {
      sem.push({ ...doc.data(), id: doc.id });
    });
    
   
    return sem;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error accordingly.
  }
};

const getSubjects = async (id) => {
  const db = getFirestore();
  // const  postsQuery  = collectionGroup(db, "subject",where("id", "==", id));
  let subjects = [];


  const semesterRef = collection(db, 'sem', id, 'subject');
  const q = query(semesterRef);
  const queryS = await getDocs(q);
  queryS.forEach((doc) => {
    subjects.push({ id: doc.id, ...doc.data() });
  });





  // const querySnapshot=await getDocs(postsQuery)
  //  querySnapshot.forEach((doc) => {
  //       // doc.data() returns the data of the document
  //       subjects.push({ id: doc.id, ...doc.data() });
       
    
     

  //   })
    return subjects;
   
};
const getChapters = async (id) => {
  const db = getFirestore();
  // const  postsQuery  = collectionGroup(db, "chapter",where("id", "==", id));
   let chapters = [];
  // const querySnapshot=await getDocs(postsQuery)
  //  querySnapshot.forEach((doc) => {
  //       // doc.data() returns the data of the document
  //       chapters.push({ id: doc.id, ...doc.data() });
       
    
     

  //   })
   console.log(id)

  const chapterRef = collection(db, 'subject', id, 'chapter');
  const q = query(chapterRef);
  const queryS = await getDocs(q);

  queryS.forEach((doc) => {
    chapters.push({ id: doc.id, ...doc.data() });
  });





console.log(chapters)




    return chapters;
   
};



const getConcepts= async (id) => {
  const db = getFirestore();
  const  postsQuery  = collectionGroup(db, "concepts",where("id", "==", id));
  let concepts = [];
  const querySnapshot=await getDocs(postsQuery)
   querySnapshot.forEach((doc) => {
        // doc.data() returns the data of the document
        concepts.push({ id: doc.id, ...doc.data() });
       
    
     

    })
    return concepts;
   
};

const getQuestions=async (id)=>{
  const db = getFirestore();
  const  postsQuery  = collectionGroup(db, "question",where("id", "==", id));
  let questions = [];
  const querySnapshot=await getDocs(postsQuery)
   querySnapshot.forEach((doc) => {
        // doc.data() returns the data of the document
        questions.push({ id: doc.id, ...doc.data() });
       
    
     

    })
    return questions;

}

export { setUp ,getSubjects,getChapters,getConcepts,getQuestions};
