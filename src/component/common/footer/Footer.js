import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-logo'>
            <img src='./images/logo_big.png'/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
          <div className='footer-icons-container'>
              <img src='../images/instagram_icon.png' alt=''/>
          </div>
          <div className='footer-icons-container'>
              <img src='../images/whatsapp_icon.png' alt=''/>
          </div>
          <div className='footer-icons-container'>
              <img src='../images/pintester_icon.png' alt=''/>
          </div>
        </div>
        <div className='footer-copyright'>
          <hr/>
          <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer