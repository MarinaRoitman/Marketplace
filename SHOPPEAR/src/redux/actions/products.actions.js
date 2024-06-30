export const fetchProducts = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      //mode: "no-cors"
    };

    try {

      const response = (await fetch("http://localhost:4002/auth/productos", requestOptions))
      const data = await response.json()
      console.log(data)
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data });
      return data
    } catch (error) {
      console.error(error);// Manejar errores aquí, por ejemplo, dispatch({ type: 'PRODUCTS_FETCH_FAILURE', payload: error.message });
    }
    return null
  };
};

export const fetchCategorias = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      //mode: "no-cors"
    };

    try {

      const response = (await fetch("http://localhost:4002/auth/categorias", requestOptions))
      const data = await response.json()
      dispatch({ type: 'CATEGORIES_FETCH_SUCCESS', payload: data });
      return data
    } catch (error) {
      console.error(error);// Manejar errores aquí, por ejemplo, dispatch({ type: 'PRODUCTS_FETCH_FAILURE', payload: error.message });
    }
    return null
  };
};

export const fetchProductosByIdUsuario = (id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos/usuario/" + id, requestOptions))
      const data = await response.json()
      dispatch({ type: 'CATEGORIES_FETCH_PRODUCTOS_BY_ID_USUARIO', payload: data });
      return data
    } catch (error) {
      console.error(error);// Manejar errores aquí, por ejemplo, dispatch({ type: 'PRODUCTS_FETCH_FAILURE', payload: error.message });
    }
    return null
  };
};

export const discountStock = (products) => ({
  type: "DISCOUNT_STOCK",
  payload: products,
});