import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Ngoun OudoM. All rights reserved.</p>
      <div className={styles.footerIcons}>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
      </div>
    </footer>
  );
};

export default Footer;