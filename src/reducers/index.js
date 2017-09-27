import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './reducer_users';
import CompanyReducer from './reducer_companies';
import FeedbackReducer from './reducer_feedbacks';

const allReducers = combineReducers({
  users: UserReducer,
  companies: CompanyReducer,
  feedbacks: FeedbackReducer,
  form: formReducer
})

export default allReducers;
