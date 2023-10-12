// Projetcs

import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Projects.module.css"
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project5.png';

const projectData = [
    { 
        image: project1, 
        title: 'Semester Project 2', 
        description: 'For this project we were making an auction site where users could add items to be bid on and bid on items other users had put up for auction.',
        repoLink: 'https://github.com/MaritaMalvinsdatter/semester-project-2', 
        hostLink: 'https://semester-project-auction-house.netlify.app/'  
    },
    { 
        image: project2, 
        title: 'Final Exam', 
        description: 'Our final exam was to create an accommodation booking site called Holidaze.There were two aspects to this brief: the customer-facing side and an admin-facing side',
        repoLink: 'https://github.com/MaritaMalvinsdatter/semester-project-2', 
        hostLink: 'https://semester-project-auction-house.netlify.app/'  
    },
    { 
        image: project3, 
        title: 'Semester Project 1', 
        description: 'Our first Semester Project where we had to make a website for a Community Science Museum, where the core target audience was children aged 7-15, and families with younger kids.',
        repoLink: 'https://github.com/MaritaMalvinsdatter/semester-project-2', 
        hostLink: 'https://semester-project-auction-house.netlify.app/'  
     },
    { 
        image: project4, 
        title: 'Freelance', 
        description: 'This was a freelance project where I set up a website for a shop in Trondheim offering local and international products, catering, food courses and lunch/dinners',
        repoLink: 'https://github.com/MaritaMalvinsdatter/semester-project-2', 
        hostLink: 'https://semester-project-auction-house.netlify.app/'  
    },
    { 
        image: project5, 
        title: 'Exam 1', 
        description: 'This was our Exam Project where we had to make a blog of our choosing, and put into practice the skills we had learned during our first year of studies. I chose a travel blog.',
        repoLink: 'https://github.com/MaritaMalvinsdatter/semester-project-2', 
        hostLink: 'https://semester-project-auction-house.netlify.app/'  
    },
]

const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <h1 className="text-center">Projects:</h1>
            <Row className="justify-content-center">
                {projectData.map((project, index) => (
                    <Col key={index} md={4} sm={6} xs={12} className={styles.projectColumn}>
                        <Card className={styles.projectCard}>
                            <div className={styles.projectImageContainer}>
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            </div>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                                <Card.Text className={styles.cardText}>{project.description}</Card.Text>
                                <div className={styles.buttonContainer}>
                                    <Button variant="primary" href={project.repoLink} target="_blank" className={styles.repoButton}>Repo</Button>
                                    <Button variant="secondary" href={project.hostLink} target="_blank" className={styles.hostButton}>Host</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}



export default Projects;