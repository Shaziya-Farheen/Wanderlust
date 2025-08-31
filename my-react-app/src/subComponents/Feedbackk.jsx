import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Feedback = () => {
  const [name, setFullName] = useState("");
  const [message, setMes] = useState("");
  const [email, setEmail] = useState("");
 

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/apii/reservation/feedback",
        { name, message, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFullName("");
      setMes("");
      setEmail("");
     
      
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
        
            <Link to={"https://www.linkedin.com/in/shaziya-farheen-aa8100380/"} target="_blank"><FaLinkedin /></Link>
            <Link to={"https://www.linkedin.com/in/gayatri-shinde-bb715b294/"} target="_blank"><FaLinkedin /></Link>
        
          </ul>
        </div>

      <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input 
               type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea 
               type="text"
                placeholder="Your Experience"
                value={message}
                onChange={(e) => setMes(e.target.value)}
            />
            <button type="submit" 
            onClick={handleReview}
            >SEND</button>
          </form>
        </div>
        </div>
      </section>
     </>
   );
};

export default Feedback;