import React from 'react';
import { FaLinkedin, FaGitlab,  FaGithub, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import useTextAnimation from '../hooks/UseTextAnimation';
import Profile from '../assets/images/Profile.jpg';
import CV from '../assets/images/Student_Frontend_Developer_CV.pdf';
const Name = () => {
  const animatedText = useTextAnimation();
  return (
    <div className="nev-bar">
      <div className="nev-bar-1">
        <div className="box">
          <h1 style={{fontFamily: 'Suwannaphum', fontSize: '50px', color: '#0F89E2'}}>
            Ngoun <span className="namepio"> Oudom</span><span className="me-2" style={{color: 'aqua'}}> Web</span>Developer
          </h1>
          <span className="txt exe">I'm a<span></span> <span className="txt text-1">{animatedText}</span></span>
          {/* <span className="txt text-1">{animatedText}</span> */}
          <p style={{fontSize: '16px', fontFamily: 'Roboto', color: 'white'}}>
          Welcome to my profile! <br />
          I'm Oudom, the CEO of IT-ស្រុកស្រែ, a passionate tech group dedicated to building practical and user-friendly digital solutions tailored for communities and local businesses.
          </p>
          <div className="box-icon">
            <div className="icon"><a href="www.linkedin.com/in/oudom-ngoun-975585300"><FaLinkedin /></a></div>
            <div className="icon"><a href="https://gitlab.com/keooudom189"><FaGitlab /></a></div>
            <div className="icon"><a href="https://github.com/oudomweb"><FaGithub /></a></div>
            <div className="icon"><a href="https://t.me/oudom_devKh"><FaTelegram /></a></div>
            <div className="icon"><a href="https://www.tiktok.com/@keo71998"><FaTiktok /></a></div>
          </div>
          <div className="btn">
            <a href="" download={CV}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download My CV
            </a>
          </div>
        </div>
      </div>
      <div className="nev-bar-2">
        <div className="img">
        <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};
export default Name;