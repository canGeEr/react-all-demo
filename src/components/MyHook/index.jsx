import React, { useState } from 'react';
import Test from './test';
import useSecond from './useSecond';

const Index = () => {
  const [value, setValue] = useState('就这？');
  useSecond(setValue);

  function updateValue() {
    setValue(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="hook-index">
      <Test value={value} handleChange={handleChange} />
      <button id="button" type="button" onClick={updateValue}>点击更新</button>
    </div>
  );
};

export default Index;
