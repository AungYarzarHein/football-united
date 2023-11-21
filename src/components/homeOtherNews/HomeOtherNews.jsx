import React from 'react';
import "./homeOtherNewsStyle.css";

const OtherNewsCard = ({item}) => {
  return(
    <div className="otherNewsCard">
      <div className="cardImage" style={{backgroundImage:`url(${item.imageUrl})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} >
       
      </div>
      <span className="cardTitle">
      {item.title}
      </span>
    </div>
  )
}

const HomeOtherNews = ({otherNewsData}) => {
  // console.log("Hello Fries",otherNewsData)
  return (
    <div className="homeOtherNewsContainer">
      <span className='homeOtherNewsTitle' > Other Football News</span>
        {/* <OtherNewsCard />
        <OtherNewsCard />
        <OtherNewsCard />
        <OtherNewsCard />
        <OtherNewsCard /> */}

        {
          otherNewsData.map( (item,index) => {
            return(<OtherNewsCard item={item} key={index} />)
          })
        }
      </div>
  )
}

export default HomeOtherNews