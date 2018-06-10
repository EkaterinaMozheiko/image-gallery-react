import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'
import Main from './components/main';

const store = createStore(allReducers);

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'));

module.hot.accept();

