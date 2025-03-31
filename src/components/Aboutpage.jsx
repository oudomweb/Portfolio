import React from 'react';

const About = () => {
  return (
    <div className="box-under-contain">
      <div className="box-under-box">
        <div className="box-img-1">
          <img src="/photo/me1atpub.jpg" alt="About me" />
        </div>
        <div className="box-p">
          <h1>About <span style={{ color: 'aqua' }}>Me</span></h1>
          <h2>Frontend Developer!</h2>
          <p>
            Before you can begin to determine what the composition of a particular paragraph will be,
            you must first decide on an argument and a working thesis statement for your paper...
          </p>
          <div className="btn-container">
            <a href="/photo/me2atAK.jpg" className="responsive-btn">
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