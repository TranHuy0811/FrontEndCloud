import React from 'react'
import { images } from '../../../../constants'
import './title.css';
import './title_reponsive.css';
import { PageNumber } from '../../../../components/PageNumber/pageNumber';

export const Title = () => {
  return (
    <>
    <img className="product-title" src={images.productTitle} alt='a' />
      <PageNumber />
    </>
  )
}
