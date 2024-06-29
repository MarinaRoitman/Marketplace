const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
  datosUsuario: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "CHECK_LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "FETCH_USER_BY_ID":
      return {
        ...state,
        datosUsuario: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;