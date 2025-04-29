import React from 'react';
import Kiloit from "../assets/images/Kiloit.jpg";
import Etec from "../assets/images/Etec.jpg";
import Norton from "../assets/images/norton.jpg";
const Project = () => {
  return (
    <div className="projects-container">
      <div className="section-title">
        <h1>My <span>Project</span></h1>
      </div>
      
      <div className="projects-grid">
        <div className="project-card">
          <div className="card-image">
            <img src={Kiloit}
            />
            <div className="card-overlay">
              <h3>What is Data Science?</h3>
              <p>Data science is the study of data to extract meaningful insights for business...</p>
            </div>
          </div>
          <a href="#" className="project-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            KiloIT
          </a>
        </div>

        {/* <div className="project-card">
          <div className="card-image">
            <img src={Kiloit}
            />
            <div className="card-overlay">
              <h3>What is Data Science?</h3>
              <p>Data science is the study of data to extract meaningful insights for business...</p>
            </div>
          </div>
          <a href="#" className="project-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            KiloIT
          </a>
        </div> */}

        {/* Project 2 */}
        <div className="project-card">
          <div className="card-image">
            <img 
              src={Etec}
              alt="Web Developer" 
            />
            <div className="card-overlay">
              <h3>What Is a Web Developer?</h3>
              <p>Web developers create functional, user-friendly websites and web applications...</p>
            </div>
          </div>
          <a href="#" className="project-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Etec Center
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="card-image">
            <img 
              src={Norton}
              alt="Software Development" 
            />
            <div className="card-overlay">
              <h3>What is software development?</h3>
              <p>Software development refers to a set of computer science activities...</p>
            </div>
          </div>
          <a href="#" className="project-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Norton
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;