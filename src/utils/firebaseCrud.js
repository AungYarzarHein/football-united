import {db} from "../config/firebase";
import { addDoc , collection , getDocs } from 'firebase/firestore';


export const fetchAllPost = async (collectionName) => {
       
    await getDocs(collection(db, collectionName))
        .then((querySnapshot)=>{ 
            let data = []              
           querySnapshot.docs.map((doc) => {
            // console.log(doc.data());
            data.push(doc.data());
           });


        //    console.log(data);

           return data ;
            
        })
   
}