import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import {
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from 'react-router-dom';

import Home from "./components/home.jsx";
import MenuBar from './components/menu-bar.jsx';
import Login from "./components/user/login.jsx"
import SignUp from './components/user/sign-up.jsx';
import Cart from './components/cart/cart.jsx'; 
import Categories from './components/category/show-categories.jsx';
import ProductsCategories from './components/category/products-category.jsx';
import ShowDetailProduct from './components/products/show-products/show-detail-product/show-detail-product.jsx';


function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0);
  const [user, setUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home/>}/>
            <Route path="carrito" element={<Cart cartProducts = {cartProducts} setCartProducts = {setCartProducts} totalCompra = {totalCompra} setTotalCompra = {setTotalCompra} />}/>
            <Route path="productos/categorias" element={<Categories />}/>
            <Route path="productos/categorias/:id" element={<ProductsCategories />} />
            <Route path="producto/:id" element={<ShowDetailProduct 
                                                cartProducts = {cartProducts} 
                                                setCartProducts = {setCartProducts} 
                                                totalCompra = {totalCompra} 
                                                setTotalCompra = {setTotalCompra} />}/>
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
