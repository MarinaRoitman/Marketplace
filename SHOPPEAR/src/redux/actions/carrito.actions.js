export const addToCart = (productoId) => ({
  type: "ADD_TO_CART",
  payload: productoId,
});

export const removeFromCart = (productoId) => ({
  type: "EDIT_PRODUCT",
  payload: productoId,
});

export const editExistingProduct = (newProduct) => ({
  type: "EDIT_PRODUCT",
  payload: newProduct,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});
