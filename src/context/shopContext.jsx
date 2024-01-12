// ShopContextProvider.jsx
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../constants";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [xnumber, setXnumber] = useState(null); // Preserve xnumber separately

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const updateCartItemAmount = (newAmount, itemId) => {
    setCartItems((prex) => ({ ...prex, [itemId]: newAmount }));
  };

  const inspect = (numberid) => {
    console.log(`testing id : ${numberid}`);
    setXnumber(numberid); // Preserve xnumber when inspecting
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
    inspect,
    xnumber,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
