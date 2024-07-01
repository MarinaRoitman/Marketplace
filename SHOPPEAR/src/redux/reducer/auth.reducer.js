const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
  datosUsuario: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "CHECK_LOGIN":
      return {
        ...state,
        token: action.payload
      };
    case "FETCH_USER_BY_ID":
      return {
        ...state,
        datosUsuario: action.payload
      };
    case "CAMBIAR_DATOS_USUARIO":
      return {
        ...state,
        datosUsuario: action.payload
      };
    case "CREAR_CUENTA":
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;