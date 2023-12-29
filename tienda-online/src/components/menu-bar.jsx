import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";

import { Link } from 'react-router-dom';

import style from '../styles/menu-bar.module.css'

function MenuBar (){
    
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand> STORE </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-options" />
            <Navbar.Collapse id="menu-option">
                <Nav className="mx-auto">
                    <Nav.Link> <Link to="/"> Home </Link> </Nav.Link>
                    <NavDropdown title="categories"> 
                        <NavDropdown.Item> <Link to="/productos/clothes"> Clothes </Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/productos/electronics"> Electronics </Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/productos/forniture"> Fornitures </Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/productos/toys"> Toys </Link> </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link> <Link to="/carrito"> Cart </Link> </Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Item className="mx-2">
                        <Button variant="secondary" size="sm">
                            <Link to="/login"> Login </Link> 
                        </Button>
                    </Nav.Item>
                    <Nav.Item className="mx-2">
                        <Button variant="secondary" size="sm"> 
                            <Link to="/sign-up"> Create Account </Link>  
                        </Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default MenuBar
