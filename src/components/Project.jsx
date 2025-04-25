import React from 'react';

const Project = () => {
  return (
    <div className="projects-container">
      <div className="section-title">
        <h1>My <span>Project</span></h1>
      </div>
      
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="card-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe0AOjmfFeO6RUr_yD7T1SbPp3U9cNnhfSA&s" 
              alt="Data Science" 
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

        {/* Project 2 */}
        <div className="project-card">
          <div className="card-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRerloxG_go8MpvD_FYvHwpSWb7580gwmBw&s" 
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
            Etec
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="card-image">
            <img 
              src="https://i.pinimg.com/736x/c6/f3/5c/c6f35c341ad6bd005c5c44facf11fe58.jpg" 
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