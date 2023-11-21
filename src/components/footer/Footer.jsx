import React from 'react';
// import { motion } from 'framer-motion';
import "./footer.css";
// import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaTiktok,FaWhatsapp} from "react-icons/fa"


const Footer = () => {

const categories = ["MERN Stack Web Development","React Native App","Our Price List","How To Contact Us?","What we havd done?"] ;
const addressInfo = ["Yangon , Myanmar , Hledan TownShip ","12 Street , No(34) ","Sky Cloud Team"]

  return (
   <div  className="footerContainer" >
    <div className="footerCard">
      <div className='fTitlef' >
      <span className="fTitle" >
        Football
      </span>
      <span className='sTitle' >
        United
      </span>
      </div>
    </div>
    <div className="footerCard">
      <ul>
      <li className='listHeader' > Commonly Asked Questions </li>
        {categories.map((item,index) => {
            return (
                <li className='listItem' key={index} >
                    {item}
                </li>
            )
        })}
      </ul>
    </div>
    <div className="footerCard">
    <ul>
        <li className='listHeader' > Our Address </li>
        {addressInfo.map((item,index) => {
            return (
                <li className='listItem' key={index} >
                    {item}
                </li>
            )
        })}
     </ul>
    </div>
   </div>
  )
}

export default Footer