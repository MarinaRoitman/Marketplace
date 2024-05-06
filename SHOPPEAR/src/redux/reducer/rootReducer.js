import { combineReducers } from "redux";
import cartReducer from "./carrito.reducer";
import productsReducer from "./product.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
