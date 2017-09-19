import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './reducer_users';
import CompanyReducer from './reducer_companies';

const allReducers = combineReducers({
  users: UserReducer,
  companies: CompanyReducer,
  form: formReducer
})

export default allReducers;
