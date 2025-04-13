import React from 'react'

export const Product_item = (props) => {
    const { id, productName, productImage, price } = props.data;
  return (
    <>
        <img className="myproduct_img" src={productImage} alt="" />
        <div className='myproduct_info'>
            <h1>{productName}</h1>
            <h2>{price} VND</h2>
            <p>Desciption: Brown Sugar, Tomato Puree (Water, Tomato Paste), Distilled Vinegar, Molasses, Corn Starch, Salt, Spices, Dried Onion, Garlic Powder.</p>
        </div>
    </>
  )
}
