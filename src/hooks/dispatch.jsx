import React, { useState, useEffect } from 'react';

const dispatch = () => {
  const [value, setValue] = useState('打开');
  const setting = () => {
    if (value === '打开') {
      setValue('关闭');
    }
    // else {
    //   setValue('打开');
    // }
  };
  useEffect(() => {
    // console.log('触发更新了，依赖是value');
  });

  return (
    <button type="button" className="dispatch" onClick={setting}>
      {value}
    </button>
  );
};

export default dispatch;
