import React from "react"
import {useFetch} from '../useFetch.js' 

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";

import ProductCard from "./products/product-card/product-card";

function Home (){
    
    const {data, loading, error} = useFetch('https://api.escuelajs.co/api/v1/products');

    function showProducts(){
        if (error){
            return (<h1>ERROR: {error} </h1>);
        }else if (loading){
            return (<h1> Cargando... </h1>);
        }else{
            const productos = data.filter((product)=> !product.images[0].includes("/any"))
            .map((product) =>{
                return (
                    <ProductCard key={product.id} product={product}  />
                ); 
            });
            return productos;
        }
    }

    return(
        <Container className="mt-2">
            <Row className="justify-content-center">   
                {showProducts()}
            </Row>
        </Container>   
    )
}

export default Home
