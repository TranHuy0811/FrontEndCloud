// Product.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../../../../context/shopContext';
import { images } from '../../../../constants';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, inspect} = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClick = () => {
    inspect(id);
    navigate('/product');
  };

  return (
    <div className='product'>
      <img className='product-image' onClick={handleClick} src={productImage}  alt='a' />
      <div className='description'>
        <div className="product-name"> {productName} </div>
        <div className='product-price'> {price} vnđ </div>
      </div>
      <button className='hehe' onClick={() => addToCart(id)}>
        <img className='order' src={images.orderButton} alt='a' />
      </button>
    </div>
  );
};
