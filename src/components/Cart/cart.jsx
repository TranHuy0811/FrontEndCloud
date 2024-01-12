import React, { useContext } from 'react'
import { PRODUCTS } from '../../constants'
import { ShopContext } from '../../context/shopContext'
import { CartItem } from './cart-item';
import "./cart.css";
import "./cart_reponsive.css";

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div className='cart-cartItems'>
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })}
        </div>
      {totalAmount > 0 ? (        
        <div className='checkout'>
          
          <p> Subtotal: {totalAmount} vnđ</p>
          <button onClick={() => navigate('/checkout')}> 
            Checkout 
          </button>
        </div>
  ) : (
    <h1> Your Cart is empty </h1>
  )     
}
    </div>
  )
}
