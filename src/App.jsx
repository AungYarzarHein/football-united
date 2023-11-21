import { useEffect, useState } from 'react'
import './App.css' ;
import { db } from "./config/firebase";
import { addDoc , collection , getDocs } from 'firebase/firestore';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home/Home';
import Header from './components/header/Header';
import { Post } from './pages/post/Post';
// import {Post} from './pages/post/Post';
// // import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)
  
//   const fetchPost = async () => {
       
//     await getDocs(collection(db, "posts"))
//         .then((querySnapshot)=>{               
//            querySnapshot.docs.map((doc) => {
//             console.log(doc.data())
//            });
            
//         })
   
// }

// useEffect(()=>{
//     fetchPost();
// }, [])


  return (
    // <div className='appContainer' >
    //   Hello Fridnds
    //   <Footer/>
    // </div>
    <>
    <BrowserRouter>
    <div className="appContainer" >
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='post' elemen={<Post/>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>

     

    </>
  )
}

export default App
