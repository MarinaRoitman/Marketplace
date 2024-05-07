import products from "../../__mocks__/products";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
