import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { cancelable, CancelablePromise } from 'cancelable-promise';
const promises = [
  cancelable(new Promise((resolve) => setTimeout(resolve, 1))),
  new CancelablePromise((resolve) => setTimeout(resolve, 1)),
];

for (const promise of promises) {
  promise.then(() => console.log('not logged'));
  promise.cancel();
}

ReactDOM.render(
  <React.StrictMode>
    <h1> HELLO </h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
