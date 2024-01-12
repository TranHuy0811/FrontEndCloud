import React, { useContext } from 'react'
import { PRODUCTS } from '../../constants';
import { ShopContext } from '../../context/shopContext';
import {images } from '../../constants/images';
import { Product_item } from './product-item';
import "./product.css"
import "./product_reponsive.css";

export const Product = () => {

  const {xnumber} = useContext(ShopContext);
  console.log(`xnumb is ${xnumber}`);
  return (
    <div className='inspect-container'>
      <div className='myproduct-container'>
        {PRODUCTS.map((product) => {
          if(product.id === xnumber) {
            return <Product_item data={product} />
          }
        })} 
      </div>
    </div>
  )
}
