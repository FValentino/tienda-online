import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/esm/Button";

import style from "../../../styles/products/show-product.module.css"

function Product(){

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(''); 
    const [imageIndex, setImageIndex] = useState(0);

    const {id} = useParams();

    useEffect( () =>{
        fetch("https://api.escuelajs.co/api/v1/products/" + id)
            .then( (response) =>  response.json() )
            .then( (json) => setProduct(json) )
            .catch( (error) => setError(error.mesagge) )
            .finally( setIsLoading(false) )
    }, [])

    function handleNext(){
        if (imageIndex < product.images.length-1){
            setImageIndex(imageIndex+1);
        }
        else{
            setImageIndex(0);
        }

        console.log("Image Index: " + imageIndex)
    }

    function handlePrev(){
        if (imageIndex > 0){
            setImageIndex(imageIndex-1);
        }
        else{
            setImageIndex(product.images.length-1);
        }
    }

    function showImages(){
        let images;
        const prev = '<<<';
        const next = '>>>';
        if (product.images){
            return(
                <>
                    <Image className={style.Image} src={product.images[imageIndex]} thumbnail/>
                    <Row>
                        <Col className="d-flex flex-row-reverse">  
                            <Button variant="secondary" size="sm" onClick={handlePrev}> {prev} </Button>
                        </Col>
                        <Col >  
                            <Button variant="secondary" size="sm" onClick={handleNext}> {next} </Button>
                        </Col>
                    </Row>
                </>
            );
            
        }
        else{
            images = "Error al cargar las imagenes";
        }

        return images;
    }

    function showProduct(){ 

        return(
            <Row className="">
                <Row className="justify-content-center">
                    {showImages()}
                </Row>
                <Row className="justify-content-center">
                    <Row className="text-center" > <h2> {product.title} </h2> </Row>
                    <Row className="text-center"> <p> {product.description} </p> </Row> 
                    <Row className="text-center"><p> ${product.price} </p> </Row>
                </Row>
            </Row>
        );
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
        <Container fluid="sm" className="mt-3 w-50 rounded d-flex justify-content-center align-items-center bg-light">
            {error && showError()}
            {isLoading ? showLoading() : showProduct() }
        </Container>
    );
}

export default Product;