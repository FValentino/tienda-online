import React from "react";

import Button from "react-bootstrap/esm/Button";

function ShowButtons(props){

    function handleAdd(){
        const cantAux = props.cantProduct + 1;
        
        props.setCantProduct(cantAux);
    }

    function handleDecrease(){
        if (props.cantProduct > 1){
            const cantAux = props.cantProduct-1;
            
            props.setCantProduct(cantAux);
        }
    }

    function handleAddCart(){
        console.log("Entro a agregar carrito");
        const totalActual = props.totalCompra;

        const cartProduct = {product: props.product, cantProduct: props.cantProduct}

        props.setCartProducts([...props.cartProducts, cartProduct]);
        props.setTotalCompra(totalActual + (props.product.price * props.cantProduct));

        alert("Producto agregado al carrito");

        props.setIsCartProduct(true);
    }

    return (
        <>
            {
            props.isCartProduct
                ?  <Button disabled> add to cart </Button>
                : <>
                    <Button onClick={handleAddCart}> add to cart </Button>

                    <Button size="sm" variant="secondary"
                    className="ms-2 me-1" onClick={handleDecrease}> - </Button>

                        <span id="cant"> {props.cantProduct} </span>

                    <Button size="sm" variant="secondary" 
                    className="ms-1" onClick={handleAdd}> + </Button>
                 </>
            }
        </>
    );

}

export default ShowButtons;