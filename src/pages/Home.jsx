import React from 'react';
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../images/color_logo.svg';

function Home() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <nav className={styles.navLinks}>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
