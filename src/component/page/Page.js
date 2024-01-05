import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from '../home/shop/Shop';
import Footer from '../common/footer/Footer';
import Shopcategory from '../home/shoprcategory/Shopcategory';
const Page = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory category="men"/>}/>
      <Route path='/womens' element={<Shopcategory category="women"/>}/>
      <Route path='/kids' element={<Shopcategory category="kid"/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default Page