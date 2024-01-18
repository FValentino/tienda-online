import React from "react"

import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"
import Row from "react-bootstrap/esm/Row"
import { Link } from "react-router-dom"

import style from "../../../styles/card.module.css"

function ProductCard(props){
    return (
        <Card className={style.Card}>
            <Card.Body>
                <Card.Img variant="top" className="mt-2 " src={props.product.images[0]} />
                <Row className="text-center">
                    <Card.Title>{props.product.title}</Card.Title>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row className="mb-2 text-center"> 
                    <Card.Text> $ {props.product.price} </Card.Text>
                </Row>
                <Row className="justify-content-center">
                    <Button variant="primary"> 
                        <Link to={`/producto/${props.product.id}`}> watch </Link>
                    </Button>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default ProductCard