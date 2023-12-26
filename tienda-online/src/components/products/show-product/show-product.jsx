import React from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import style from "./show-product.module.css"

function Product(){

    return (
        <Container fluid="sm" className="mt-3 d-flex justify-content-center align-content-center">
            <Row className="w-75">
                <Col>
                    <Image src="https://img.freepik.com/foto-gratis/fondo-papel-rojo-elegante-fondo-escarlata-decoracion-navidena-o-textura-papel-diseno-web_166373-2152.jpg" 
                    className={style.Image}  thumbnail/> 
                </Col>
                <Col>
                    <Row><h2>NOMBRE</h2></Row>
                    <Row>DESCRIPCION</Row> 
                    <Row>PRECIO</Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;