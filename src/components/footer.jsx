import React from 'react';
import './footer.css';
import './footer_reponsive.css';
import { images } from '../constants';

export const Footer = () => {
  return (
    <img className="footer" src={images.footer} alt='a'/>
  )
}
