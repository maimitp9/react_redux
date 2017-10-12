import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import {persistStore, autoRehydrate} from 'redux-persist'
import { composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducers';
import { getUser, setUser, loginUserFailure } from './actions/action_auth';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
    // autoRehydrate()
  )
);

// begin periodically persisting the store
// persistStore(store)

const user = localStorage.getItem('access_token')
let next = store;
if(user){
  (store.dispatch(getUser(user)).payload)
  .then((response) => {
    (response.status === 200) ? 
      store.dispatch(setUser(response.data))
    :
      store.dispatch(loginUserFailure(response.data))
    })

}

const mapStateToProps = (state) => {
  return{
    auth: state.authentication.loggedinUser
  }
}

ReactDOM.render(
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
