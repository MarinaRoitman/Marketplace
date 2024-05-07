const initialState = {
    productosFiltrados: [],
  };
  

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_SEARCH":
          return {
            ...state,
            productosFiltrados: action.payload,
          };
        default:
          return state;
    }
};
  
  export default searchReducer;
  