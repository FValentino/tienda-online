import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";

function MenuBar (){
    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu-options" />
                    <Navbar.Collapse id="menu-option">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Products</Nav.Link>
                            <Nav.Link href="#link">Cart</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Item className="mx-2">
                                <Button variant="secondary" size="sm"> Login </Button>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <Button variant="secondary" size="sm"> Create account </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MenuBar
