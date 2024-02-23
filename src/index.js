import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const description = '영업시간: 09:00~22:00';
const description2 = 'wifi: ktgiga5g / pw: 12345678';
const productname = '봉골레 파스타';
const productprice = '₩ 29000';
const categoryname = '파스타';
const categoryname2 = '스테이크';
const totalprice = '₩ 29000';


function reducer(state = { description, description2, productname, productprice, categoryname, categoryname2, totalprice }, action) {
  switch (action.type) {
    case 'change':
      return { description: action.payload, description2: action.payload2, productname: action.payload3, productprice: action.payload4, categoryname: action.payload5, categoryname2: action.payload6, totalprice: action.payload7};
    default:
      return state;
  }
}

let store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
