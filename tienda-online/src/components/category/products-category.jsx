import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import ShowProducts from "../products/show-products/show-products";
import { useParams } from "react-router-dom";

function ProductsCategories(){
    
    const [productsCategory, setProductsCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const {id} = useParams(); 

    useEffect( ()=> {
        fetch('https://api.escuelajs.co/api/v1/categories/' + id + '/products')
            .then( (response) => response.json() )
            .then( (json) => setProductsCategory(json) )
            .catch( (error) => setError(error.message) )
            .finally( setIsLoading(false) );
    }, []);

    
    return (
        <Container>
            <Row className="justify-content-center">   
                <ShowProducts products={productsCategory} isLoading={isLoading} error={error} />
            </Row>
        </Container>
    );
}

export default ProductsCategories;