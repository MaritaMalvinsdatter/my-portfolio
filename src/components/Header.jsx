// Header.jsx:

import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "../styles/Header.module.css"
import { ReactComponent as Logo } from '../images/color_logo.svg';


const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" className={styles.customBg}>
            <Navbar.Brand href="#">
                <Logo width="400" height="auto" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header