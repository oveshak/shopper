import React, { useState } from 'react'
import "./header.css"
import { manu } from '../../data/Datafile'
import {Link} from "react-router-dom"

const Header = () => {
    const [menu,setMenu]=useState("Shop")
  return (
    <>
        <div className='navbar'>
            <div className='nav-logo'>
                <img src="./images/logo.png" alt=''/>
                <p>SHOPPER</p>
            </div>
           <div className='menu'>
           {
                manu.map((item)=>(
                    <ul className='nav-menu'>
                        <li onClick={()=>{setMenu(item.text)}}><Link to={item.path}>{item.text}</Link> {menu===(item.text)?<hr/>:<></>}</li>
                    </ul>
                ))
            }
           </div>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src='./images/cart_icon.png' alt=''/>
                <div className='nav-cart-count'>
                    0 
                </div>
            </div>
        </div>
    </>
  )
}

export default Header