import React from 'react'
import "./newcollection.css"
import new_collections from '../../data/New_collections'
import Item from '../item/Item'
const NewCollection = () => {
  return (
    <>
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className='collections'>
                {
                    new_collections.map((item,i)=>{
                        return <Item key={i}  id={item.id} name={item.name} images={item.image} new_price={item.new_price} old_price={item.old_price} />
                    
                    })
                }

            </div>
        </div>
    </>
  )
}

export default NewCollection