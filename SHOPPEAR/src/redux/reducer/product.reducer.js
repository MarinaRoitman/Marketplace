const initialState = {
  products: [],
  loading: false,
  error: null,
  categories: [],
  productosByIdUsuario: [],
  productoSeleccionado: null
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
      };
    case 'CATEGORIES_FETCH_PRODUCTOS_BY_ID_USUARIO':
      return {
        ...state,
        productosByIdUsuario: action.payload
      };
    case 'REALIZAR_COMPRA':
      return {
        ...state,
        //deberia actualizar los productos...
      };
    case 'GET_PRODUCTO_BY_ID':
      return {
        ...state,
        productoSeleccionado: action.data
      };
    case 'CREAR_PRODUCTO':
      return {
        ...state,
        products: [...state.products, action.payload] //agrego el nuevo producto a products
      };
    default:
      return state;
  }
};

export default productsReducer;