import React from 'react';

const Skills = () => {
  return (
    <div>
      <div className="box-h1-1">
        <h1 style={{ color: '#fff' }}>My<span style={{ color: 'aqua' }}>Skills</span></h1>
      </div>
      <div className="box-leader-skill">
        <div className="box-skill-1">
          <div className="box-title-1">
            <h4 style={{ color: 'white' }}>Technical <span>Skills</span></h4>
          </div>
          <div className="box-sup">
            <div className="box-sp">
              <div className="box-html">
                <span className="title-htlm">
                  <i className="fa-brands fa-html5 technology"></i><h2>HTML</h2>
                </span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">100%</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Add CSS and JS bars similarly */}
          </div>
        </div>
        <div className="box-skill-2">
          <div className="box-title-4"><h4>Professional Skills</h4></div>
          <div className="ban">
            <div className="radial-bars">
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                  <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                </svg>
                <div className="percentage seven">70%</div>
                <div className="text">Creativity</div>
              </div>
              {/* Add other radial bars */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;