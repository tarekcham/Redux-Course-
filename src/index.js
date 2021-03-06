import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
// import the reducers
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';





const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(
  allReducers,
   {
    products: [{name: 'iPhone'}],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
);






ReactDOM.render(<Provider store={store}>
 <App /> 
 </Provider>, document.getElementById('root'));
registerServiceWorker();
