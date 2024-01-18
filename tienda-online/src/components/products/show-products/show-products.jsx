import React from "react";

import ProductCard from "../product-card/product-card";
import Error from '../../error';
import Loading from "../../loading";

function ShowProducts(props){
    const productos = props.products
                        .filter((product)=> !product.images[0].includes("/any"))
                        .map((product) =>{
                            return (
                                <ProductCard key={product.id} product={product}  />
                            ); 
                        });

    return (
        <>
            {
                props.error 
                    ? <Error error = {props.error} />
                    : props.isLoading 
                        ? <Loading/>
                        : productos
            }
        </>
    );
}

export default ShowProducts;