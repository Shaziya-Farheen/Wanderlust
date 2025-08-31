import React from "react";
import { Link } from "react-router-dom";
// import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+001 1234 999</span>
          </div>
          <div>
            <p>Email</p>
            <span>wanderlust@gmail.com</span>
          </div>
          {/* <div>
            <p>Address</p>
            <span>House No.123 Sector A-1</span>
          </div> */}
          
          <ul>
          <Link to={"https://github.com/Shaziya-Farheen"} target="_blank"><FaGithub/></Link>
          <Link to={"https://github.com/gaytri7887"} target="_blank"><FaGithub /></Link>
          
        </ul>
        
        <ul>
           <Link to={"https://www.linkedin.com/in/shaziya-farheen-aa8100380/"} target="_blank"><FaLinkedin /></Link>
          <Link to={"https://www.linkedin.com/in/gayatri-shinde-bb715b294/"} target="_blank"><FaLinkedin /></Link>

        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;