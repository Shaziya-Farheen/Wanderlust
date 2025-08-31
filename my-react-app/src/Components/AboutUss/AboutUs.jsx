import React from "react";
import About from "../../subComponents/About";

const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/view.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
         
          <p> This studio apartment combines a serene cherry blossom and wood theme, 
          creating a peaceful and cozy atmosphere. The soft pink hues of cherry
           blossoms, paired with natural wood accents, provide a harmonious blend
            of nature and warmth. </p>

          <p>The space is thoughtfully designed to evoke 
            relaxation, featuring comfortable furnishings and calming decor. </p>
            
          <p> The overall aesthetic is simple yet elegant, with an inviting,
           tranquil vibe perfect for unwinding and enjoying a quiet retreat.</p>
        </div>
      </div>
      <About />
    </section>
  );
};

export default AboutUs;