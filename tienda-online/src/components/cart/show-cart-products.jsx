import React from "react";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";

import style from '../../styles/cart/show-cart-product.module.css'

function ShowCartProduct(props){

    function eliminarProducto(){
        const totalActual = props.totalCompra - props.product.price;

        props.cartProducts.splice(props.index , 1);
        props.setTotalCompra(totalActual);
        props.setDeleteProduct(true);
    }

    return(
        <Row className="mt-2 mb-2">
            <Col className="text-center"> 
                <Image src={props.product.images[0]} className={style.Image}  />
            </Col>
            <Col className="mt-2 text-center"> {props.product.title} </Col>
            <Col className="mt-2 text-center"> ${props.product.price} </Col>
            <Col className="mt-2 text-center">  {props.cant} </Col>
            <Col className="mt-2 text-center"> 
            <Button size="sm" onClick={ eliminarProducto } variant="primary"> eliminar </Button> </Col>
        </Row>
    );
}

export default ShowCartProduct;