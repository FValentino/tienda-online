import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "react-bootstrap/esm/NavLink";
import Button from "react-bootstrap/esm/Button";

import { Link } from 'react-router-dom';

import '../styles/menu-bar.module.css';

function MenuBar (){
    
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand> STORE </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-options" />
            <Navbar.Collapse id="menu-option">
                <Nav className="mx-auto">
                    <Nav.Item className="nav nav-link" > <Link className="text-decoration-none" to="/"> Home </Link> </Nav.Item>
                    <Nav.Item className="nav nav-link" > <Link className="text-decoration-none" to="/carrito"> Cart </Link> </Nav.Item>
                    <Nav.Item className="nav nav-link" > <Link className="text-decoration-none" to="/productos/categorias"> Category </Link> </Nav.Item>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Item className="mx-2">
                        <Button variant="secondary" size="sm">
                            <Link className="text-decoration-none" to="/login"> Login </Link> 
                        </Button>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Button variant="secondary" size="sm"> 
                            <Link className="text-decoration-none" to="/sign-up"> Create Account </Link>  
                        </Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default MenuBar
