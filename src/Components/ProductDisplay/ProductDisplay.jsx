import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt=""  />
                <img src={product.image} alt=""  />
                <img src={product.image} alt=""  />
                <img src={product.image} alt=""  />
            </div>
            <div className="productDisplay-img">
                <img className='productDisplay-main-img' src={product.image} alt=""  />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">From: {product.old_price}</div>
                <div className="productDisplay-right-price-new">To: {product.new_price}</div>
            </div>
            <div className="productDisplay-right-description">
            Nestled amidst rolling fields and framed by verdant countryside, the strawberry farm is a picturesque haven for fruit enthusiasts and nature lovers alike
            </div>
            <div className="productDisplay-right-size">
                <h1>Select Box</h1>
                <div className="productDisplay-right-sizes">
                    <div className="">Small</div>
                    <div className="">Medium</div>
                    <div className="">Large</div>
                    
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productDisplay-right-category"> <span>Category :</span> Groceries, Fruits, vegies </p>
            <p className="productDisplay-right-category"> <span>Tags: </span>#organic #local </p>

        </div>
    </div>
  )
}
