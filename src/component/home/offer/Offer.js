import React from 'react'
import "./offer.css"
const Offer = () => {
  return (
    <>
    <div className='offers'>
        <div className='offers-left'>
            <h1>
                Exclusive
            </h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src='./images/exclusive_image.png' alt=''/>
        </div>
    </div>
    </>
  )
}

export default Offer