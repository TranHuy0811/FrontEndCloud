import React from 'react'
import { ShopContext } from '../../context/shopContext'
import { images } from '../../constants'
import { PRODUCTS } from '../../constants'
import "./blog.css"
export const Blog = () => {
  return (
    <div className='blog-container'>
      <img className='blog-pic' src={images.blog_post}/>

      <div className="post-container">
        <div className="first-post">
          <img src={images.mar_3} />
          <h3 style={{fontSize : "1.5vw",marginTop :"0.8vw"}}><em>Beautiful day to order our food </em></h3>
          <button>
            <img src={images.read_more} alt="" />
          </button>
        </div>


        <div className="first-post">
          <img src={images.mar_4} />
          <h3 style={{fontSize : "1.5vw",marginTop :"0.8vw"}}><em>Do you know cats also like chalua? </em></h3>
          <button>
            <img src={images.read_more} alt="" />
          </button>
        </div>


        <div className="first-post">
          <img src={images.mar_5} />
          <h3 style={{fontSize : "1.5vw",marginTop :"0.8vw"}}><em> 80% Pork  </em></h3>
          <button>
            <img src={images.read_more} alt="" />
          </button>
        </div>
  
      </div>
    </div>
  )
}
