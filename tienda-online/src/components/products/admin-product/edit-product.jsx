import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

function EditProduct(){
    return (
        <Container fluid="sm" className="justify-content-center w-50">
            <Form>
                <Form.Group className="mb-1" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="tex"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>

                <Form.Group className="mb-1" controlId="image">
                    <Form.Label>Product image</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>

                <div className="text-center mt-3">
                    <Button variant="primary" type="submit">
                        Save product
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default EditProduct;