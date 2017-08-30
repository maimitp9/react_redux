import { combineReducers } from 'redux';
import UserReducer from './users/reducer_users';

const allReducers = combineReducers({
  users: UserReducer
})

export default allReducers;
