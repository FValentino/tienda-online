import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/esm/Button";

import style from "../../../../styles/products/show-detail-product.module.css"
import Col from "react-bootstrap/esm/Col";

function ShowImages(props){

    function handleChangeImage(indexImage){
        props.setIndexMainImage(indexImage);
    }

    function asideImages(){
        if (props.product.images){
            const images = props.product.images.map( (image, index) => {
                return (
                    <>  
                        <Button variant="outline-secondary"
                        onClick={ ()=> { handleChangeImage( index ) } } 
                        className="mt-3" >
                            <Image className={style.SideImages} src={image} /> 
                        </Button> 
                    </>
                );
            });
            return images;
        }
    }
    
    return(
        <>
            <Col className="w-25">
                <Row>
                    <Col className="h-25 mt-3 mb-3 text-center d-flex justify-content-center">
                        <Row className="ms-1">
                            {asideImages()}
                        </Row>
                    </Col>
                    <Image 
                        className={style.MainImage} 
                        src={props.product.images[props.indexMainImage]}
                    />
                </Row>
            </Col>
        </>
    );
}

export default ShowImages;