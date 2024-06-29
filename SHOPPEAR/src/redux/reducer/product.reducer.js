const initialState = {
  products: [],
  loading: false,
  error: null,
  categories: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'PRODUCTS_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null
      };
    case 'PRODUCTS_FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: []
      };
    case 'CATEGORIES_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    default:
      return state;
  }
};

export default productsReducer;