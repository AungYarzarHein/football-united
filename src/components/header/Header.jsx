import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css";
import pageLogo from "../../assets/footballUnited-logo.png"; 
import {FaBars} from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
const [show ,setShow] = useState(false);
const navigate = useNavigate();
const onClickHandler = (routeName) => navigate(routeName);
const onMobileMenu = () => {
  setShow(!show);
}

const onMobileMenuItemClick = (routeName) => {
  setShow(false);
  navigate(routeName);
}

const onCloseHandler = (e) => {
  console.log(e.target.className)
if(e.target.className != "mobileMenuItem"){
  setShow(false);
}
}

  return (
   <>
    <div className='headerContainer' >
        <div className="headerLogo">
            <img src={pageLogo} className="img" style={{width:"50px"}} />
            <span className="headerTitle" onClick={()=>onClickHandler("/")} >
             Football United
            </span>
        </div>

        <div className="menuBar">
            <span className="menuBtn" onClick={()=>onClickHandler("/projects")} >Projects</span>
            <span className="menuBtn" onClick={(e)=>console.log(e.target)}  >Experiences</span>
            <span className="menuBtn" onClick={()=>onClickHandler("/info")} >About Us</span>
            <span className="menuBtn" onClick={()=>onClickHandler("/contact")} >Contact</span>
        </div>

        <div className="menuIcon" onClick={onMobileMenu} >
            <FaBars />
        </div>
    </div>
    
    <div className={show?"mobileMenuBtnCloseSpace showMobileMenu ":"mobileMenuBtnCloseSpace"} onClick={()=>setShow(false)} >
    <div className={show ? "mobileMenu showMobileMenu":"mobileMenu"}>
       <div className="mobileMenuBar">
        <span className="mobileMenuItem" onClick={()=>onMobileMenuItemClick("/projects")} >Projects</span>
        <span className="mobileMenuItem" onClick={(e)=>console.log(e.target.className)} >Experiences</span>
        <span className="mobileMenuItem" onClick={()=>onMobileMenuItemClick("/info")} >About Us</span>
        <span className="mobileMenuItem" onClick={()=>onMobileMenuItemClick("/contact")} >Contact</span>
       </div>
    </div>
    </div>
    
   </>
  )
}

export default Header