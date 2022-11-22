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

  const { products, sort } = state;

  useEffect(() => {
    let _products = products;
    let _sort = sort;

    if (sort) {
      _products = _products.sort((a, b) =>
        _sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: { products: _products },
      });
    } else {
      (async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        _products = await response.json();
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: { products: _products },
        });
      })();
    }
  }, [sort]);

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
