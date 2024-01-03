import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import CategoryCard from './category-card.jsx'

function Categories(){
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then((response) => response.json())
            .then( (json) => setCategories(json) )
            .catch( (error) => setError(error.message) )
            .finally( setIsLoading(false) );
    },[]);

    console.log("DATA: ", categories)
    
    function showError(){
        if (error){
            return (<h1>ERROR: {error} </h1>);
        }
    }

    function showLoading(){
        if (isLoading){
            return (<h1> Cargando... </h1>);
        }
    }
    function showCategories(){
        if (categories.length > 0){
            const categoriesAux = categories.filter((category)=> !category.image.includes("/any"))
            .map((category) =>{
            return (
                <CategoryCard key={category.id} category={category} />
            ); 
            });
            return categoriesAux;
        }else{
            return (showLoading());
        }
    }

    return (
        <Container> 
            <Row className="justify-content-center">
                {error && showError()}
                {isLoading && showLoading()}
                {showCategories()}
            </Row>
        </Container>
    ); 
}

export default Categories;