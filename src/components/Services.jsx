import React from 'react';

const Services = () => {
  return (
    <div className="box-end">
      <div className="under-the-end">
        <div className="end-title">
          <h1 style={{ color: 'aqua' }}>My <span style={{ color: 'white' }}>Services</span></h1>
        </div>
        <div className="card-end">
          <div className="layout">
            <div className="icon-1"><i className="fa-solid fa-code"></i></div>
            <div className="title-4">
              <h2>UX/UI Design</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
              <div className="btn-5">
                <button><a href="https://dribbble.com/tags/ui-ux" style={{ textDecoration: 'none', color: 'black' }}>About</a></button>
              </div>
            </div>
          </div>
          {/* Add other service cards */}
        </div>
      </div>
    </div>
  );
};

export default Services;