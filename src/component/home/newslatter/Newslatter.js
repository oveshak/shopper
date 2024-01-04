import React from 'react'
import "./newslatter.css"
const Newslatter = () => {
  return (
    <>
        <div className='newsletter'>
            <h1>Get Exclusive Offer on your email</h1>
            <p>subscribe to our newslatter and stay updated</p>
            <div>
                <input type='email' placeholder='Your Email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Newslatter