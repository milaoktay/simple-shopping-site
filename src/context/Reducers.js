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
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.filter((ele) =>
          ele.id === action.payload.id ? ele.qty++ : ele.qty
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.filter((ele) => {
          if (ele.id === action.payload.id) {
            if (ele.qty > 1) {
              return ele.qty--;
            } else {
              ele.id !== action.payload.id;
            }
          }
        }),
      };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "TOGGLE_CART":
      return { ...state, isOpen: !action.payload };
    default:
      return { ...state };
  }
};
