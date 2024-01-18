import React, { useEffect, useState } from "react"
import {useFetch} from '../useFetch.js' 

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";

import ShowProducts from "./products/show-products/show-products.jsx";


function Home (){

    const [productsIni, setProductsIni] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, serError] = useState('');

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then( (response) => response.json() )
            .then( (json) => setProductsIni(json) )
            .catch( (error) => serError(error.message) )
            .finally( setIsLoading(false) )
    }, []);

    return(
        <Container className="mt-2">
            <Row className="justify-content-center">  
                <ShowProducts products={productsIni} isLoading={isLoading} error={error} />
            </Row>
        </Container>   
    )
}

export default Home
