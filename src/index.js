import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  , document.getElementById('root'));
registerServiceWorker();
