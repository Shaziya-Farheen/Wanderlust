import React from "react"
// import { RiFacebookBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>We are always ready for your feedbacks -  </p>
        <p>
        So please contact us to share your delightful experience with us for more sevices .</p>
        <div className="container">
          <img src="/host2.jpg" alt="about" />
          <div className="content">
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
                <Link to={"https://github.com/gaytri7887"} target="_blank">
                  <FaGithub />
                </Link>
                <Link to={"https://github.com/Shaziya-Farheen"} target="_blank">
                  <FaGithub />
                </Link>
                <Link to={"https://www.linkedin.com/in/gayatri-shinde-bb715b294/"} target="_blank">
                  <FaLinkedin />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;