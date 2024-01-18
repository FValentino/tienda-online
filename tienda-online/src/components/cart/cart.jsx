import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import style from '../../styles/cart/cart.module.css'

import ShowCartProduct from "./show-cart-products";

function Cart(props){

    const [deleteProduct, setDeleteProduct] = useState(false);

    useEffect( ()=>{setDeleteProduct(false)}, [deleteProduct] );

    function emptyCart(){
        if (props.cartProducts.length === 0){
            return ( <h1 className="text-center" > Empty cart </h1> );
        }
    }

    function showProducts(){
        const cartProducts = props.cartProducts.map( (product, index) => {
            return ( 
                <ShowCartProduct key={product.product.id} 
                    product={product.product} 
                    cant={product.cantProduct}                
                    setCartProducts = {props.setCartProducts} 
                    cartProducts = {props.cartProducts} 
                    index = {index}
                    totalCompra = {props.totalCompra}
                    setTotalCompra = {props.setTotalCompra}
                    setDeleteProduct = {setDeleteProduct}
                /> 
            );
        });

        return cartProducts;
    }

    return(
        <Container className="mt-3 rounded mb-0 border border-black bg-light">
            <div className={style.CartHeader}> 
                <Row className="border border-black">
                    <Col>
                        <h3> Cart </h3>
                    </Col>
                    <Col></Col>
                    <Col className="d-flex flex-row-reverse"> 
                        <span> $ {props.totalCompra} </span> 
                        <Image className={style.CartIcon} src="https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
                    </Col>
                </Row>
                <Row className="border border-black">
                    <Container className={style.CartBody}>
                        {props.cartProducts.length === 0? emptyCart() :
                            <Container>
                                <Row className="mt-2 mb-2">
                                    <Col className="text-center"> <h4> Product </h4> </Col>
                                    <Col className="text-center"> <h4> Name </h4> </Col>
                                    <Col className="text-center"> <h4> Price </h4> </Col>
                                    <Col className="text-center"> <h4> Cant </h4> </Col>
                                    <Col className="text-center"></Col>
                                </Row>
                                {showProducts()}
                            </Container>
                        }
                    </Container>
                </Row>
            </div>
        </Container>

    );
}

export default Cart;