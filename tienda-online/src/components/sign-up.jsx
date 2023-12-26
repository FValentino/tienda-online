import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

function SignUp(){
    return (
        <Container fluid="sm" className="justify-content-center w-50">
            <Form>
                <Form.Group className="mb-1" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="phone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                        Create account
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default SignUp;