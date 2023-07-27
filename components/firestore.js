import { collection, getFirestore, getDocs } from "firebase/firestore";

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

export { setUp };
