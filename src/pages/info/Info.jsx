import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

const Info = () => {
  console.log('Info.jsx');
  return (
    <div>
      Info
      {/*
        当渲染该组件时，会自动的强迫导航，容易理解一点就是 Redirect 自动的调用了
        跳转机制
      */}
      {/* <Redirect to="/" /> */}
    </div>
  );
};

export default Info;
