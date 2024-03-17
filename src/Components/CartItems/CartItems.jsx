import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useQuery, gql, useMutation } from '@apollo/client';
import Books from '../../Book';

const CREATE_JOB = gql`
  mutation CreateJob($record: JobRecordInput) {
    createJob(record: $record) {
        record {
            _id
        }
    }
}
`;


export const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
    const [createJobMutation, { _ }] = useMutation(CREATE_JOB);

    const createJob = async () => {
        // "record": {
        //     "clientId": "65f4fac4a289418eb74b799b",
        //     "customerAddressId": "65f4fac4a289418eb74b79bf",
        //     "customerId": "65f4fac4a289418eb74b799b",
        //     "fleetId": null,
        //     "items": [],
        //     "jobDate": "2024-03-16T11:25:02.088Z",
        //     "jobStatus": null,
        //     "jobType": "pickupOnly",
        //     "supplierAddressId": "65f4fac4a289418eb74b79ba",
        //     "supplierId": "65f4fac4a289418eb74b799f"
        //   }

        
        console.log('<<<<<<<<<<<<<<', new Date());
        try {
            
            const res = await createJobMutation(
                { 
                    variables: { 
                        record: {
                            clientId: "65f4fac4a289418eb74b799b",
                            customerAddressId: "65f4fac4a289418eb74b79bf",
                            customerId: "65f4fac4a289418eb74b799b",
                            fleetId: null,
                            items: [],
                            jobDate: new Date(),
                            jobStatus: null,
                            jobType: "pickupOnly",
                            supplierAddressId: "65f4fac4a289418eb74b79ba",
                            supplierId: "65f4fac4a289418eb74b799f"
    
                        }
                    }
                }
            );

            console.log('data>>>>', res.data.createJob.record._id);
            localStorage.setItem('jobId', res.data.createJob.record._id);
        } catch (error) {
            
            console.log('error', error);
        }
    }

    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    
                return  <div className="cartItems-format cartItems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartItems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cart_remove_icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                    </div>
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="cartItems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>   

                    {/*  */}
                    <div className='shipping-container'>
                        <h3>Shipping address</h3>
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Postcode" />
                        <select>
                            <option value="someOption">Bulli</option>
                            <option value="otherOption">Fairy Meadow</option>
                            <option value="otherOption">Dapto</option>
                        </select>
                        <input type="text" placeholder="Email" />
                    </div>  

                    <div className='shipping-container'>
                        <h3>Payment details</h3>
                        <input type="text" placeholder="Card number" required />
                        <input type="text" placeholder="Expiry" require />
                        <input type="text" placeholder="CVC" />
                    </div> 

                     <button onClick={createJob}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
