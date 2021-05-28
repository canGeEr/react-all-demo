import React, { useState, useEffect } from 'react';

function useTooks(init) {
  const [state, setState] = useState(init);
  useEffect(() => {
    // useEffect(() => {
    //   console.log('dsads');
    // });
    setTimeout(() => {
      setState(state + 1);
    }, 1000);
  });
}

function add(callback) {
  callback(1);
}

const Index = () => {
  add(useTooks);
  console.log('更新');
  return (
    <div />
  );
};

export default Index;
