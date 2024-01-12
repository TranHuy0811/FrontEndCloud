import React from 'react'

import { About, Advertisement, Order, Show, Title } from './container';
import Signup from '../../authentication/Signup';
import './shop.css';

export const Shop = () => {
  return (
  <> 
  <div className='body'> 
    <Advertisement />
    <Title />
    <Show />
    <About />
    <Order />
    <Signup />
  </div>
  </>
  )
}
