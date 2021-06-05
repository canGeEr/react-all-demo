import React, { useEffect, useRef, useState } from 'react';

const data = [];

function add(len) {
  for (let i = 0; i < len; i += 1) {
    data.push({
      id: `${Math.floor(Math.random() * 1000)}${i}`,
      title: `${Math.floor(Math.random() * 1000)}${i} 列表`,
      height: Math.floor(Math.random() * 10) * 20,
    });
  }
}
add(10);

data.splice(8, 0, {
  id: '就这',
  title: '特殊的',
  height: 300,
});

const Index = () => {
  const scrollContainer = useRef();
  const [state, setstate] = useState(0);
  useEffect(() => {
    const target = document.getElementById(data[8].id);
    const { scrollTop, clientHeight } = scrollContainer.current;
    const { offsetTop, style: { height } } = target;
    if (parseInt(height, 10) > clientHeight) {
      console.log(scrollTop, clientHeight, offsetTop);
      if (scrollTop + clientHeight > offsetTop) {
        // eslint-disable-next-line
        console.log('触发了');
      }
    }
  }, [state]);
  useEffect(() => {
    document.getElementById(data[8].id).style.backgroundColor = '#000';
  }, []);

  const onscroll = () => {
    setstate(state + 1);
  };

  return (
    <>
      <div className="content" style={{ height: 200 }} />
      <div
        className="container"
        style={{ height: 400, overflowY: 'scroll', position: 'relative' }}
        onScroll={onscroll}
        ref={scrollContainer}
      >
        <div className="item-box">
          {
          data.map((item) => (
            <div
              id={item.id}
              className="item"
              key={item.id}
              style={{ padding: '20px 0', height: item.height }}
            >
              {item.title}
            </div>
          ))
        }
        </div>
      </div>
    </>

  );
};

export default Index;
