import React from 'react';
import { Product } from './product';
import { PRODUCTS } from '../../../../constants';
import './show.css';
import './show_reponsive.css';
import { PageNumber } from '../../../../components/PageNumber/pageNumber';
export const Show = () => {
  return (
<>
    <div className="product-show1">
      <div className="line1">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="line2">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}              
      </div>
    </div>
    <PageNumber />
</>
  )
}
