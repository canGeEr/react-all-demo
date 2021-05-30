import React from 'react';
// import useFuck from './useFuck';

// 函数组件需要大写
const Index = () => {
  const ref = React.createRef();
  // const state = useFuck();
  // console.log(`useFuck里的state：${state}`);

  return (
    <div>
      <TestCom realRef={ref} />
    </div>
  );
};

const TestCom = ({ realRef }) => (
  <div className="test-com" ref={realRef}>
    这是test-com元素
  </div>
);

export default Index;
