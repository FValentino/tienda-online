import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import CategoryCard from "./category-card";
import Error from "../error";
import Loading from "../loading";

function Categories(){
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then((response) => response.json())
            .then( (json) => {
                json.splice(5, Infinity)
                setCategories(json)
            })
            .catch( (error) => setError(error.message) )
            .finally( setIsLoading(false) );
    },[]);

    const showCategories = categories.map((category) =>{
        return (
            <CategoryCard key={category.id} category={category} />
        ); 
    });

    return (
        <>
            {
                error 
                    ? <Error error = {error} />
                    : isLoading 
                        ? <Loading/>
                        : <Container> 
                            <Row className="justify-content-center">
                                {showCategories}
                            </Row>
                        </Container>
            }
        </>
    );
}

export default Categories;