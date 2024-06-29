export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const logout = () => ({
    type: LOGOUT
});

export const fetchUsers = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("http://localhost:4002/auth/usuarios", requestOptions);
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS', payload: data });
      return data
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const checkLogin = (mail, password) => {
    return async (dispatch) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "mail": mail,
          "contrasena": password
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        
        
        try{
            const response = await fetch("http://localhost:4002/auth/usuarios/login", requestOptions)
            const data = await response.json()
            dispatch({ type: 'CHECK_LOGIN', payload: data });
            return response
        } catch (error){

        }
        
    };
  };

export const getUsuarioById = (id) => {
    return async (dispatch) => {
        try{
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
            const response = await fetch("http://localhost:4002/auth/usuarios/" + id, requestOptions)
            const data = await response.json()
            console.log(data, "info del ususario")
            dispatch({ type: 'FETCH_USER_BY_ID', payload: data });
        } catch (error){
            console.log(error, "error de fetch")
        }
        return response
    };

};