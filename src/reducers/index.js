import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Authentication from './reducer_auth';
import UserReducer from './reducer_users';
import CompanyReducer from './reducer_companies';
import FeedbackReducer from './reducer_feedbacks';
import Pagination from './reducer_pagination';

const allReducers = combineReducers({
  authentication: Authentication,
  users: UserReducer,
  companies: CompanyReducer,
  feedbacks: FeedbackReducer,
  pagination: Pagination, 
  form: formReducer
})

export default allReducers;
