import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users/reducer_users';

const allReducers = combineReducers({
  users: UserReducer,
  form: formReducer
})

export default allReducers;
