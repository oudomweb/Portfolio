import React from 'react';
import { FaLinkedin, FaGitlab, FaFacebook, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import useTextAnimation from '../hooks/UseTextAnimation';
import Profile from '../assets/images/Profile.jpg';
// import Cafe from "../assets/images/Cafe.jpg";

const Name = () => {
  const animatedText = useTextAnimation();
  return (
    <div className="nev-bar">
      <div className="nev-bar-1">
        <div className="box">
          <h1 style={{fontFamily: 'Suwannaphum', fontSize: '50px', color: '#0F89E2'}}>
            Ngoun <span className="namepio"> OudoM</span><span className="me-2" style={{color: 'aqua'}}> Web</span>Developer
          </h1>
          <span className="txt exe">I'm a</span>
          <span className="txt text-1">{animatedText}</span>
          <p style={{fontSize: '16px', fontFamily: 'Roboto', color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nihil maxime id suscipit...
          </p>
          <div className="box-icon">
            <div className="icon"><a href=""><FaLinkedin /></a></div>
            <div className="icon"><a href=""><FaGitlab /></a></div>
            <div className="icon"><a href=""><FaFacebook /></a></div>
            <div className="icon"><a href=""><FaInstagram /></a></div>
            <div className="icon"><a href=""><FaTelegram /></a></div>
            <div className="icon"><a href=""><FaTiktok /></a></div>
          </div>
          <div className="btn">
            <a href="/photo/me2atpub.jpg">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download
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