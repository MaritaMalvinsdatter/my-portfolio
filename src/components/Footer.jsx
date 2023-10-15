import React from 'react';
import styles from "../styles/Footer.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`text-center py-4 mt-5 ${styles.customBg}`}>
      <p> {currentYear} &copy; All rights reserved.</p>
    </footer>
  );
};

export default Footer;
