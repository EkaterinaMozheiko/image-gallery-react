import React from 'react';
import ReactDom from 'react-dom';
// import Provider from 'react-redux';
//import createStore from 'redux';
// import allReducers from './reducers/index';
// const Main = require('./components/main');
import Main from './components/main';


ReactDom.render(
    <Main />,
  document.getElementById('root'));

module.hot.accept();

