import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import {
  Routes,
  Route,
  Outlet,
  useParams,
  BrowserRouter,
} from 'react-router-dom';

import Home from "./components/home.jsx";
import MenuBar from './components/menu-bar.jsx';
import Login from "./components/user/login.jsx"
import SignUp from './components/user/sign-up.jsx';
import Cart from './components/cart/cart.jsx'; 
import Categories from './components/category/categories.jsx';
import ProductsCategories from './components/category/products-category.jsx';
import ShowProduct from "./components/products/show-product/show-product.jsx"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />}/>
            <Route path="carrito" element={<Cart />}/>
            <Route path="productos/categorias" element={<Categories/>}/>
            <Route path="productos/categorias/:id" element={<ProductsCategories/>}/>
            <Route path="producto/:id" element={<ShowProduct />}/>
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
