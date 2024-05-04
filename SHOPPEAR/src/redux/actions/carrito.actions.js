export const addToCart = (productoId) => ({
    type: 'ADD_TO_CART',
    payload: productoId
  });
  
  export const removeFromCart = (productoId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productoId
  });
  