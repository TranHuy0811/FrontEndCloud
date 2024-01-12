import React, { useContext } from 'react';
import { images } from '../../constants';
import { ShopContext } from '../../context/shopContext';

export const Checkout_item = (props) => {
    const { id, productName, productImage, price } = props.data;
    const { cartItems} = useContext(ShopContext);
    return (
        <>
            <tr>
                <td>
                    <img className='don_hang_hinhanh' src={productImage}/>
                </td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{cartItems[id]}</td>
                <td>{cartItems[id] * price} VND</td>
            </tr>
        </>
    )
}
