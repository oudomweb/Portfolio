import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="section-header">
        <h1>My<span className="highlight">Skills</span></h1>
      </div>
      <div className="skills-container">
        <div className="technical-skills">
          <div className="skills-title">
            <h4>Technical <span>Skills</span></h4>
          </div>
          <div className="skills-list">
            {[{
              icon: <FaHtml5 className="html-icon" />, title: 'HTML', percentage: '100%'
            }, {
              icon: <FaCss3Alt className="css-icon" />, title: 'CSS', percentage: '80%'
            }, {
              icon: <FaJs className="js-icon"/>, title: 'JavaScript', percentage: '70%'
            }, {
              icon: <FaReact className="react-icon" />, title: 'React', percentage: '60%'
            }, {
              icon: <FaNodeJs className="node-icon" />, title: 'Node.js', percentage: '50%'
            }, {
              icon: <FaPython className="python-icon" />, title: 'Python', percentage: '70%'
            },
            {
               icon: <FaDatabase className="mysql-icon" />, title: 'MySQL', percentage: '85%' 
            }].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-content">
                  <span className="skill-title">
                    {skill.icon}
                    <h3>{skill.title}</h3>
                  </span>
                  <div className="skill-bar-container">
                    <span className="skill-progress" style={{ width: skill.percentage }}>
                      <span className="progress-tooltip">{skill.percentage}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="professional-skills">
          <div className="skills-title"><h4>Professional Skills</h4></div>
          <div className="radial-skills-container">
            <div className="radial-bars-grid">
              {[{
                percentage: '85%', text: 'Creativity'
              },
              {
                percentage: '90%', text: 'Work Hard'
              },
              {
                percentage: '70%', text: 'Project Manager'
              },
              {
                percentage: '100%', text: 'Communication'
              }, {
                percentage: '75%', text: 'Teamwork'
              }, {
                percentage: '70%', text: 'Problem Solving'
              }].map((skill, index) => (
                <div className="radial-bar-item" key={index}>
                  <svg viewBox="0 0 200 200">
                    <circle className="radial-background" cx="100" cy="100" r="80"></circle>
                    <circle 
                      className="radial-progress" 
                      cx="100" cy="100" r="80" 
                      style={{ 
                        strokeDasharray: '502',
                        strokeDashoffset: `calc(502 - (502 * ${parseInt(skill.percentage)}) / 100)`
                      }}
                    ></circle>
                  </svg>
                  <div className="radial-percentage">{skill.percentage}</div>
                  <div className="radial-label">{skill.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;