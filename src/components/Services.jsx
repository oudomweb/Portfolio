import React from 'react';
import { FaCode, FaApple, FaLaptopCode } from 'react-icons/fa';
import { FaCropSimple } from 'react-icons/fa6';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1><span className="highlight">My</span> <span className="title">Services</span></h1>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="card-icon">
            <FaCode className="icon" />
          </div>
          <div className="card-content">
            <h3>UX/UI Design</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis iste delectus odio illum...
            </p>
            <a 
              href="https://dribbble.com/tags/ui-ux" 
              className="card-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FaApple className="icon" />
          </div>
          <div className="card-content">
            <h3>Database</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis iste delectus odio illum...
            </p>
            <a 
              href="https://dribbble.com/tags/mobile-app-design" 
              className="card-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FaLaptopCode className="icon" />
          </div>
          <div className="card-content">
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis iste delectus odio illum...
            </p>
            <a 
              href="https://dribbble.com/tags/web%20design" 
              className="card-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;