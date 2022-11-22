import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
    sort: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const _products = await response.json();
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: { products: _products },
      });
    })();
  }, []);

  console.log(state);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
