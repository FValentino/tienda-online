import React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import style from '../../styles/cart/cart.module.css'

function Cart(){
    return(
        <Container className="mt-3 rounded mb-0 border border-black bg-light">
            <div className={style.CartHeader}> 
                <Row className="border border-black">
                    <Col>
                        <span>PRODUCTOS</span>
                    </Col>
                    <Col></Col>
                    <Col className="d-flex flex-row-reverse"> 
                        <span> $ total </span> 
                        <Image className={style.CartIcon} src="https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
                    </Col>
                </Row>
                <Row className="border border-black">
                    <div className={style.CartBody}></div>
                </Row>
            </div>
        </Container>

    );
}

export default Cart;