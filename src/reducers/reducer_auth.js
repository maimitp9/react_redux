const INITIAL_STATE = {
      loggedinUser: { user: null, token: null, authenticated:  false, error: null}
}

const authentication = (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case 'LOGIN_USER_SUCCESS':
                  return {...state, loggedinUser: { user: action.payload.user, token: action.payload.token, authenticated: action.payload.authenticated, error: null } }
            case 'LOGIN_USER_FAILURE':
                  return {...state, loggedinUser: { authenticated: action.payload.authenticated, error: action.payload.message } }
            case 'LOGOUT_USER':
                  return {...state, loggedinUser: { user: null, token: null, authenticated: null, error:null } }
            default:
                  return state;
      }
}

export default authentication;