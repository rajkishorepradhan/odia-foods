import './App.css';
import React from 'react';
import Product from './components/Product/product';
import {
  BrowserRouter,
  Route,
  Routes,
 
 } from 'react-router-dom';
 import Home from './components/HomePage/home';
 import CartScreen from './cartscreen/cartScreen';
 import Allproduct from './components/Product/allProduct';
import Header from './components/Header/header';
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>

            
            <Route  path="/" element={<Home/>} exact />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/all-product" element={<Allproduct/>} />
            <Route exact path="/search" component={Header} />

            <Route path="/cart" element={<CartScreen/>} />
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
