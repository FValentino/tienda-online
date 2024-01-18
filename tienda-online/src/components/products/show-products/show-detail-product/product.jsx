import React, { useState } from "react";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card"

import ShowButtons from "./buttons";


function DetailProduct(props){

    const [cantProduct, setCantProduct] = useState(1);

    return(
        <Col className="mt-3 mb-3">
            <Card className="h-100 border-3">
                <Card.Header className="text-center"> 
                    <h2> {props.product.title} </h2> 
                </Card.Header>

                <Card.Body> 
                    {props.product.description}
                </Card.Body>

                <Card.Footer className="text-end"> 
                    <Row>
                        <Col className="text-start">
                            <ShowButtons 
                                product = {props.product}
                                cartProducts = {props.cartProducts}
                                setCartProducts = {props.setCartProducts}
                                cantProduct = {cantProduct} 
                                setCantProduct = {setCantProduct}
                                totalCompra = {props.totalCompra}
                                setTotalCompra = {props.setTotalCompra}
                                isCartProduct = {props.isCartProduct}
                                setIsCartProduct = {props.setIsCartProduct}
                            />
                        </Col>

                        <Col>
                            <h3>${props.product.price}</h3> 
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default DetailProduct;