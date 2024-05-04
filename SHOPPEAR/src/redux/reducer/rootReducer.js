import { combineReducers } from 'redux';
import cartReducer from './carrito.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;