import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
  document.getElementById('root'),
);
