import React, { useContext } from 'react';
import { PRODUCTS } from '../../constants';
import { ShopContext } from '../../context/shopContext';
import { images } from '../../constants';
import "./checkout.css";
import { json } from 'react-router-dom';
import  { Checkout_item } from './checkout-item';

export const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(`cartItem in checkout: ${JSON.stringify(cartItems)}`);

  return (
    <div className='checkout_container'>
      <div className='don_hang_container'>
         <table>
            <thead>
               <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               {PRODUCTS.map((product) => {
                     if(cartItems[product.id] !== 0) {
                        return <Checkout_item data={product} />
                     }
               })} 
            </tbody>
         </table>
         <div className="checkout_buy">
            <a >
               <img src={images.checkout_buy} alt="" />
            </a>
         </div>    
      </div>
      <div className='checkout_total'>
         <h2 style={{fontSize : "2vw"}}>Cart Totals</h2>
         <img src={images.lineVector} />
         <h2 style={{marginTop:"2vw" , fontSize: "2vw"}}>{totalAmount} VND</h2>
      </div>
    </div>
  )
}
