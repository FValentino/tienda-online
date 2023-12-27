import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

function Login() {
    return (
        <Container fluid="sm" className="justify-content-center w-50">
            <Form>
                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                        login
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;