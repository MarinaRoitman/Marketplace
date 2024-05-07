import { combineReducers } from "redux";
import cartReducer from "./carrito.reducer";
import productsReducer from "./product.reducer";
import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer,
});

export default rootReducer;
