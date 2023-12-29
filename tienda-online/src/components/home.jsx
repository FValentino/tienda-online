import React from "react"

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";

import ProductCard from "./products/product-card/product-card";

function Home (props){
    
    function produtosInicio(){
        const productos = props.productos.map((product) =>{
            return (
                <ProductCard key={product.id} imagen={product.images[0]}  nombre={product.title} precio={product.price}  />
            ); 
        });
        return productos;

    }

    if (props.isLoading){
        return (
        <>
            <h1>CARGANDO...</h1>
        </>
        );
    }
    
    return(
        <Container className="mt-2">
            <Row className="justify-content-center">   
                {produtosInicio()}
            </Row>

        </Container>   
    )
}

export default Home
