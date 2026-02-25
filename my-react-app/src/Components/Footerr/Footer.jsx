import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return(
        <>
         <footer className={isHomePage ? 
            'homePage_footer otherPage_footer': "otherPage_footer"} id = "foot">
              <div className="container">
          <h4>Wanderlust</h4>
          <p>
          
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect  with  us</h4>
          <p>+91 8446272032</p>
          <p>shazii2605@gmail.com</p>
          <p className= "para">© All Rights Reserved By Wanderlust.</p>
        </div>
         </footer>
        </>
    )
}

export default Footer