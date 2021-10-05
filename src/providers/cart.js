import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };

  const rmvToCart = (name) => {
    const newCartList = cartList.filter((item) => item.name !== name);
    setCartList(newCartList);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, rmvToCart }}>
      {children}
    </CartContext.Provider>
  );
};
