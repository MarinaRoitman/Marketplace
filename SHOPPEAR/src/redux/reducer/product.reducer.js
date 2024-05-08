import products from "../../__mocks__/products";

const initialState = {
  products,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DISCOUNT_STOCK":
      return{
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
