import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from '../home/shop/Shop';
import Footer from '../common/footer/Footer';
import Shopcategory from '../home/shoprcategory/Shopcategory';
import Product from '../home/product/Product';
import Cart from '../home/cart/Cart';
import LoginSignup from '../home/loginsignup/LoginSignup';
const Page = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<Shopcategory category="mens"/>}/>
      <Route path='/womens' element={<Shopcategory category="women"/>}/>
      <Route path='/kids' element={<Shopcategory category="kid"/>}/>
      <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default Page