import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from '../home/shop/Shop';
const Page = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Page