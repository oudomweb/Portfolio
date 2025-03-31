import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPhoneVolume, FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks");
  };

  return (
    <div className="box-loot">
      <div className="color">
      </div>
      <div className="color-1">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input type="text" placeholder="Enter Name" required />
          </div>
          <div className="input">
            <input type="text" placeholder="Enter Subject" required />
          </div>
          <div className="input">
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="input-1">
            <textarea placeholder="Enter Your Messages" required></textarea>
          </div>
          <button type="submit" className="btn-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;