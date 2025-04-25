import React from 'react';
import { FaFacebookF, FaDribbble, FaGithub, FaTelegramPlane, FaTwitter, FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';

const Footerb = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaDribbble />, label: 'Dribbble' },
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <FaTelegramPlane />, label: 'Telegram' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaBehance />, label: 'Behance' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Landing Page</li>
            <li>Popup Builder</li>
            <li>Web-design</li>
            <li>Content</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Use Cases</h4>
          <ul>
            <li>Web-designers</li>
            <li>Marketers</li>
            <li>Small Business</li>
            <li>Website Builder</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Academy</li>
            <li>Blog</li>
            <li>Themes</li>
            <li>Hosting</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column contact">
          <h4>Contact Us</h4>
          <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
          <p>support@figma.com</p>
        </div>
      </div>

      <div className="footer-social">
        <p>Follow us</p>
        <div className="social-icons">
          {socialLinks.map((item, idx) => (
            <div className="social-icon" key={idx}>
              {item.icon}
              <span className="tooltip">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales and Refunds</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footerb;
