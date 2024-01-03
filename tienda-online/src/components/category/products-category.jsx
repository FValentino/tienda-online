import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import ProductCard from "../products/product-card/product-card";
import { useParams } from "react-router-dom";

function ProductsCategories(){
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const {id} = useParams(); 

    useEffect( ()=> {
        fetch('https://api.escuelajs.co/api/v1/categories/' + id + '/products')
            .then( (response) => response.json() )
            .then( (json) => setProducts(json) )
            .catch( (error) => setError(error.message) )
            .finally( setIsLoading(false) );
    }, []);

    function showProducts(){
        const productsAux = products.filter( (product) => !product.images[0].includes('/any') )
        .map( (product) => {
            return( 
                <ProductCard key={product.id} product={product} />
            );
        });

        return (productsAux);
    }

    function showError(){
        if (error){
            return (<h1>ERROR: {error} </h1>);
        }
    }

    function showLoading(){
        if (isLoading){
            return (<h1> Cargando... </h1>);
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">   
                {error && showError()}
                {isLoading && showLoading()}
                {showProducts()}
            </Row>
        </Container>
    );
}

export default ProductsCategories;