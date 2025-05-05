import React, { useState } from 'react';
import Etec from "../assets/images/Etec.jpg";
import Norton from "../assets/images/norton.jpg";
import Project1 from "../assets/images/project1.png";
import Kiloit from "../assets/images/Kiloit.jpg";
import Aeon from "../assets/images/Aeon.jpg";
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: "Petronas",
    img: Project1,
    category: "system",
    // description: "Data science is the study of data to extract meaningful insights...",
    Link: "https://petronas.coredev.online/"
  },
  {
    id: 1,
    title: "Aeon",
    img: Aeon,
    category: "app",
    description: "Data"
  },
  {
    id: 2,
    title: "Etec Center",
    img: Etec,
    category: "web",
    description: "Web developers create functional, user-friendly websites..."
  },
  {
    id: 3,
    title: "Norton",
    img: Norton,
    category: "app",
    description: "Software development refers to a set of computer science activities..."
  }
];

const categories = ["all", "web", "system", "app"];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projectData
    : projectData.filter(proj => proj.category === activeCategory);

  return (
    <div className="projects-container">
      <div className="section-title">
        <h1>My <span>PROJECT</span></h1>
        <div className="category">
          {categories.map(cat => (
            <h4
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </h4>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <a href={project.Link} target="_blank" rel="noopener noreferrer" className="project-card" key={project.id}>
                    <div className="card-image">
                      <img src={project.img} alt={project.title} />
                      <div className="card-overlay">
                        {/* <h3>{project.title}</h3>
                        <p>{project.description}</p> */}
                      </div>
                    </div>
                    <div className="project-btn">
                      <span></span><span></span><span></span><span></span>
                      {project.title}
                    
                   </div>
                   
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
