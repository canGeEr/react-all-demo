import React, {
  useRef, useEffect, useCallback, useState,
} from 'react';
import './index.css';

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

const Index = () => {
  console.log('就这');
  const [state, setstate] = useState(0);
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current.getBoundingClientRect());
  });

  const onScroll = useCallback(() => {
    setstate((oldState) => oldState + 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <>
      <div
        className="overflow"
        style={{
          width: 500,
          height: 500,
          margin: 'auto',
          border: '1px solid black',
          overflowY: 'scroll',
        }}
      >
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
        <div
          className="getBoundingClientRect"
          ref={ref}
        >
          就这
        </div>
      </div>

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
    </>

  );
};

export default Index;
