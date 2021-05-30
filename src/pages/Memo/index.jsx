import React, { useCallback, useState } from 'react';
import MyCom from './MyCom';

const arr = [];

const Index = () => {
  const [state, setstate] = useState(1);
  const oldFun = useCallback(() => {
    console.log('这个方法并没有传入新的值绑定');
  }, []);

  return (
    <div>
      <MyCom value={oldFun} />
      <button type="button" onClick={() => { setstate(state + 1); }}>加1</button>
      {state}
    </div>
  );
};

export default Index;
