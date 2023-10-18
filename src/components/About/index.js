import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
import "../About/style.css";

function About() {
  return (
    <section id="about-me" className="about-container">
      <div className="about-header">
        <h1 className="section-title">Meet Our Team</h1>
      </div>
      <div className="about-content">
        
        <div className="intro-text">
          <p>
            Hi there! I'm Justin Morris, a passionate developer based in Los Angeles. I hold a degree in Computer Science from the University of California, and my journey into the world of technology began back in 2010.
          </p>
          <p>
            Throughout my career, I've had the privilege of working on a wide range of exciting projects, from building mobile apps for startups to developing complex web applications for established enterprises. My love for coding knows no bounds, and I'm always eager to explore new technologies and solve challenging problems.
          </p>
          <p>
            When I'm not immersed in the world of coding, you can find me exploring the beautiful landscapes of California with my furry friends. I'm a firm believer in work-life balance and make it a point to recharge by spending time in nature, whether it's hiking in the mountains or simply enjoying a relaxing day at the beach.
          </p>
          <p>
            Feel free to reach out if you have any questions or if you'd like to collaborate on an exciting project. Let's turn your ideas into reality!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
