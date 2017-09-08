const INITIAL_STATE = { usersList: {users: [], error:null, loading: false},
							newUser:{user:null, error: null, loading: false, status: false},
							activeUser:{user:null, error:null, loading: false},
							deletedUser: {user: null, error:null, loading: false},
						};
const users = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {

    case "FETCH_USERS":
      return {...state, usersList: { users: [], error: null, loading: true}}
    case "FETCH_USERS_SUCCESS":
      return {...state, usersList: { users: action.payload, error: null, loading: false}}
    case "FETCH_USERS_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, usersList: { users: [], error: error, loading: false}}

		case "NEW_USER":
      return {...state, newUser: {user: null, error: null, loading: true, status: false}}
    case "NEW_USER_SUCCESS":
      return {...state, newUser:{user: action.user, error: null, loading: false, status: action.payload.success}}
    case "NEW_USER_FAILURE":
      error = action.payload || {message: action.payload.message};
      return {...state, newUser: {user: null, error: error, loading:false, status: false }}
    case "RESET_NEW_USER":
      return {...state, newUser:{user:null, error: null, loading: false, status: false}}

    case "FETCH_USER":
      return { ...state, activeUser:{...state.activeUser, error: null, loading: true}};
    case "FETCH_USER_SUCCESS":
      return { ...state, activeUser: {user: action.payload, error: null, loading: false}};
    case "FETCH_USER_FAILURE":
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, activeUser: {user: null, error:error, loading:false}};
    case "RESET_ACTIVE_USER":
      return { ...state, activeUser: {user: null, error:null, loading: false}};

    case "DELETE_USER":
      return {...state, deletedUser: {...state.deletedUser, loading: true}}
    case "USER_DELETED_SUCCESS":
      return {...state, deletedUser: {user: action.payload ,error: null, loading: false}}
    case "USER_DELETED_FAILURE":
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, deletedUser: {user: null, error: error, loading: false}}
    case "RESET_DELETED_USER":
      return {...state, deletedUser: {user: null, error: null, loading: false}}



    case "SHOW_USER":
      return action.payload
    default:
      return state;
  }
}
export default users;
