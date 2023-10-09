// Header.jsx:

import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "../styles/Header.module.css"
import { ReactComponent as Logo } from '../images/color_logo_name.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" className={styles.customBg}>
            <Navbar.Brand as={Link} to="/">
                <Logo width="500" height="auto" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header