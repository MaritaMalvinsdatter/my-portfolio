import React from 'react';
import myImage from '../images/img_me.jpg';
import styles from "../styles/About.module.css"

function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className={`text-center ${styles.heading}`}>About Me</h2>
          <p className={styles.regularText}>
          I'm Marita, a junior front-end developer, currently on a journey of self-improvement in the world of coding. 
          My fascination with programming sparked during the Covid-19 pandemic, leading me to explore web development. 
          I've completed my front-end studies and now proudly hold the title of a junior front-end developer. 
          Simultaneously, I'm actively engaged in advancing my skills in back-end development.
          </p>
          <p className={styles.regularText}>
          My prior experience in the hospitality industry, coupled with living overseas, has honed my communication skills 
          and provided a global perspective, which I bring to my work. I thrive on challenges and am motivated by the 
          transformation of a blank page into a functional project.
          </p>
          <p className={styles.regularText}>
            Let's connect and delve further into the digital realm together. Happy coding!
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={myImage}
            alt="Me in my home office"
            className="img-fluid rounded-circle mt-3"
            style={{ maxWidth: '80%', maxHeight: 'auto' }}
          />
        </div>
      </div>
      <hr />
      <div className="mt-4 text-center">
        <h3 className={styles.heading}>Contact:</h3>
        <p className={styles.regularText}>marita.malvinsdatter@gmail.com</p>
        <p><a className={styles.link} href="https://www.linkedin.com/in/marita-malvinsdatter-stenersen//">My LinkedIn Profile</a></p>
        <p><a className={styles.link} href="https://github.com/MaritaMalvinsdatter/">My GitHub Profile</a></p>
      </div>
    </div>
  );
}

export default About;
