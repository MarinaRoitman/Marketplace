import { combineReducers } from "redux";
import cartReducer from "./carrito.reducer";
import productsReducer from "./product.reducer";
import searchReducer from "./search.reducer";
import authReducer from './auth.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer,
  users: userReducer,
});

export default rootReducer;
