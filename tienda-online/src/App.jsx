import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from "./components/home.jsx";
import MenuBar from './components/menu-bar.jsx';
import Login from "./components/login.jsx"
import SignUp from './components/sign-up.jsx';
import Product from './components/products/show-product/show-product.jsx';
import AddProduct from './components/products/admin-product/add-product.jsx';
import EditProduct from './components/products/admin-product/edit-product.jsx';
/**<MenuBar/>
    <Home/>
    <Login/>
    <SignUp/> */

function App() {
  /** categories, product, product-create, product-edit, cart, cart-detail */
  return (
  <>
    <MenuBar/>
    <Product/>
    <AddProduct/>
    <EditProduct/>
  </>
  )
}

export default App
