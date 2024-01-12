import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} alt='b'/>
        <div className='description'>
            <p>
                <b> {productName} </b>
            </p>
            <p>{price} vnđ</p>
            <div className='countHandler'>
              <button onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
