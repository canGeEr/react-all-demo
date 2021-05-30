import { useState, useEffect } from 'react';

const useFuck = (initialState) => {
  console.log('自定义hooks调用');
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    setTimeout(() => {
      setstate(state + 1);
    }, 1000);
  });
  return state;
};

export default useFuck;
