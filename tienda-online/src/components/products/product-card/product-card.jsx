import React from "react"

import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Row from "react-bootstrap/esm/Row"

import style from "../../../styles/products/product-card.module.css"

function ProductCard(props){
    return (
        <Card className={style.Card}>
            <Card.Img variant="top" className="mt-2 " src={props.imagen} />
            <Card.Body>
                <Row className="mb-1 text-center">
                    <Card.Title>{props.nombre}</Card.Title>
                </Row>
                <Row className="mb-3 text-center"> 
                    <Card.Text> $ {props.precio} </Card.Text>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="primary"> watch </Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard