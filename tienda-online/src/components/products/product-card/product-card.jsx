import React from "react"

import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/esm/Card"

import style from "../../../styles/products/product-card.module.css"

function ProductCard(){
    return (
        <Card className={style.Card} style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/fondo-papel-rojo-elegante-fondo-escarlata-decoracion-navidena-o-textura-papel-diseno-web_166373-2152.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text> $ Precio </Card.Text>
                <Button variant="link" >watch</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard