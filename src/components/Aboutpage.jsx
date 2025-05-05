import React from 'react';
// import Cafe from "../assets/images/Cafe.jpg";
import AboutMe from "../assets/images/Aboutme.jpg";
const About = () => {
  return (
    <div className="box-under-contain">
      <div className="box-under-box">
        <div className="box-img-1">
          <img src={AboutMe} alt="About me" />
        </div>
        <div className="box-p">
          <h1>About <span style={{ color: 'aqua' }}>Me</span></h1>
          <h2>Frontend Developer!</h2>
          <p>
          My name is Ngoun Oudom, and I'm from Kampong Cham province. I'm a third-year student majoring in Software Development at Norton University.

          I'm a web developer, UX/UI designer, and business analyst, passionate about turning ideas into impactful digital experiences. I'm also the founder of IT-ស្រុកស្រែ, a tech initiative focused on developing creative and practical digital solutions for local communities and businesses.

          Through IT-ស្រុកស្រែ, my mission is to empower rural innovation and promote the use of technology in every corner of Cambodia.
          </p>
          <div className="btn-container">
            <a href="https://portfolio-upqy.vercel.app/" className="responsive-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;