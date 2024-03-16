import React, { useEffect, useState } from 'react'
import './Popular.css'
// import product from '../Assets/data.js'
import   {Item}  from '../Item/Item.jsx'
export const Popular = () => {

  const [products, setProduct] = useState([]); 
  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=> response.json())
    .then( (data) => setProduct(data))

  }, [])
  return (
    <div className='popular'>
        <h1>Top offer</h1>
        <hr />
        <div className="popular-item">
            {products.map((item, i)=>{
                return <Item key={i} id = {item.id} name={item.name} image ={item.image} 
                        new_price = {item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
