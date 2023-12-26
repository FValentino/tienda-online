import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import ProductCard from "./product-card/product-card";

function Products(){

    return (
        <Container> 
            <Row className="justify-content-center">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Row>
        </Container>
    ); 
}

export default Products