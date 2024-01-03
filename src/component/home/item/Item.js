import React from 'react'
import "./item.css"
const Item = (props) => {
  return (
    <>
        <div className='item'>
            <img src={props.images} alt=''/>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    {props.new_price}
                </div>
                <div>
                    {props.old_price}
                </div>
            </div>
        </div>
    </>
  )
}

export default Item