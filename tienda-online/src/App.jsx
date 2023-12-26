import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from "./components/home.jsx";
import MenuBar from './components/menu-bar.jsx';
import Login from "./components/login.jsx"
import SignUp from './components/sign-up.jsx';

function App() {
  /** categories, product, product-create, product-edit, cart, cart-detail */
  return (
  <>
    <MenuBar/>
    <Home/>
    <Login/>
    <SignUp/>
  </>
  )
}

export default App
