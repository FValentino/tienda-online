import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";

import DetailProduct from "./product";
import ShowImages from "./images";
import Error from "../../../error";
import Loading from "../../../loading";

function ShowDetailProduct(props){

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(''); 

    const [indexMainImage, setIndexMainImage] = useState(0);
    const [isCartProduct, setIsCartProduct] = useState(true);

    const {id} = useParams();

    useEffect( () =>{
        fetch("https://api.escuelajs.co/api/v1/products/" + id)
            .then( (response) =>  response.json() )
            .then( (json) =>  setProduct(json) )
            .catch( (error) => setError(error.mesagge) )
            .finally( () =>{
                setIsLoading(false);
                setIsCartProduct(props.cartProducts.filter( (productAux) => productAux.product.id === product.id ).length > 0);
            })
        
    }, [isCartProduct]);

    return (
        <Container className="bg-light rounded">
            {
                error
                ? <Error error = {error} />
                :(
                    isLoading
                    ? <Loading />
                    : (
                        <Row>
                            <ShowImages 
                                product = {product}
                                setIndexMainImage = {setIndexMainImage}
                                indexMainImage = {indexMainImage}
                            />
                            <DetailProduct 
                                product = {product} 
                                totalCompra = {props.totalCompra}
                                setTotalCompra = {props.setTotalCompra}
                                cartProducts = {props.cartProducts}
                                setCartProducts = {props.setCartProducts}
                                isCartProduct = {isCartProduct}
                                setIsCartProduct = {setIsCartProduct}
                            />
                        </Row>
                    )  
                )
            }
        </Container>   
    );
}    

export default ShowDetailProduct;