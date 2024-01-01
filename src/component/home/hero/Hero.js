import React from 'react'
import "./hero.css"
const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src='../images/hand_icon.png' alt=''/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src='../images/arrow.png' alt=''/>
                </div>
            </div>
            <div className='hero-right'>
                <img src='../images/hero_image.png' alt=''/>
            </div>
        </div>
    </>
  )
}

export default Hero