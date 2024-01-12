import React from 'react';
import './pageNumber.css';
import './pageNumber_reponsive.css';

export const PageNumber = () => {
  return (
    <div className="page-number">
      <button className="page">Page 1</button>
      <button className="page">Page 2</button>
      <button className="page">Page 3</button>
    </div>
  )
}
