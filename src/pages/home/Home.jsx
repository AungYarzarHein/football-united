import React, { useEffect, useState } from 'react';
import "./homeStyle.css";
import homeFeature from "../../assets/imger.jpeg";
import {data} from "../../components/data";
import HomeOtherNews from "../../components/homeOtherNews/HomeOtherNews";
// import { fetchAllPost } from '../../utils/firebaseCrud';
import { addDoc , collection , doc, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { LineWave } from 'react-loader-spinner';





export const Home = () => {
 const  [posts,setPosts] = useState([]);
 const  [loading,setLoading] = useState(true);
 const  [lastPost,setLastPost] = useState([]) ;
 const  [show,setShow] = useState(false);


 const fetchSignlePost = (postId) => {
  getDoc(doc(db,"postsData",postId))
  .then(item => setLastPost(item.data().data))
  .catch(err => console.log(err))
 }

 const fetchAllPost =  () => {
  const collectionRef = collection(db,"posts") ;
  const q = query(collectionRef,orderBy("timeStamp","desc"),limit(3)) ;
  getDocs(query(collectionRef,orderBy("timeStamp","desc"),limit(4)))
  .then(documents => {
    let dataArray = []
        documents.forEach(doc => {
          console.log(doc.data()) ;
          dataArray.push(doc.data());
        })

      setPosts(dataArray);
      // console.log(dataArray)
      setLoading(false);
      fetchSignlePost(dataArray[0].postId);
  })
  .catch(err => console.log(err))
 }

 useEffect(() => {
  fetchAllPost()
 },[])

  return (
    <div className='homeContainer' >
      
      <div className="homeContentBody">
      <div className="homeHeader">
        {
          posts.length ? <img src={posts[0].imageUrl} alt="Home Feature Image" className='homeFeatureImage'  /> : <div className='loading' >         <LineWave height={100} width={100} firstLineColor='red' middleLineColor='green' lastLineColor='blue' />
          </div>
        }
        {
          posts.length ? <div className="postInfo"><span> {posts[0].author} </span> <span> {posts[0].lastUpdated} </span> </div> : null
        }
        <h2>
          {posts.length && posts[0].title}
        </h2>
      </div>
     {console.log(posts)}
      <div className="homeContentData">
        {/* <LineWave height={100} width={100} firstLineColor='red' middleLineColor='green' lastLineColor='blue' /> */}
        <p>
          {data.dataText}
        </p>
        {
          lastPost.length && lastPost.map((item,index) => {
              // console.log(item.downloadUrl)
            return(
              <div className="detailsCard" key={index} >
                <img src={item.downloadUrl} className='homeFeatureImage' />
                <p> {item.details} </p>
              </div>
            )
          })
        }
      </div>
      </div>

      
      <HomeOtherNews otherNewsData={posts} />
      
    </div>
  )
}

