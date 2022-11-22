export const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload.products };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((ele) =>
          ele.id === action.payload.id
            ? (ele.qty = action.payload.qty)
            : ele.qty
        ),
      };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    default:
      return { ...state };
  }
};
