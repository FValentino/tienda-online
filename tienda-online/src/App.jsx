import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";

import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  BrowserRouter,
} from 'react-router-dom';

import Home from "./components/home.jsx";
import MenuBar from './components/menu-bar.jsx';
import Login from "./components/user/login.jsx"
import SignUp from './components/user/sign-up.jsx';
import Products from './components/products/products.jsx'
import Cart from './components/cart/cart.jsx'; 


function App() {

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(
    ()=>{
      async function getProductos(){
        try {
          setIsLoading(true);

          const res = await fetch('https://api.escuelajs.co/api/v1/products');
          const data = await res.json();
          if (data.error){
            throw new Error('Error cargando datos');
          }

          setIsLoading(false);
          setProductos(data);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
          setError(error.message);
          setProductos([]);
        }
      }

      getProductos();
    },[]
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home productos={productos} isLoading={isLoading}/>}/>
            <Route path="productos" element={<Products />}/>
            <Route path="carrito" element={<Cart />}/>
            <Route path="login" element={<Login />}/>
            <Route path="sign-up" element={<SignUp />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <>
      <MenuBar />

      <hr />
      
      <Outlet/>
    </>
  );
}

export default App
