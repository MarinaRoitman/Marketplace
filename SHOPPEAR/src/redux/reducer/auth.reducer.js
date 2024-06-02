import { LOGIN_SUCCESS, LOGOUT } from "../actions/auth.actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  password: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        password: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        password: null,
      };
    default:
      return state;
  }
};

export default authReducer;