import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

let count = 0;

let flag = true;

const Index = () => {
  const targetRef = useRef();
  const [data, setData] = useState([]);
  function add(number) {
    setData((oldData) => oldData.concat((new Array(number)).fill(0).map(() => {
      count += 1;
      const random = Math.max(Math.random() * 10, 2);
      return {
        id: count,
        title: random * 20,
        height: random * 20,
      };
    })));
  }
  useEffect(() => {
    add(10);
  }, []);

  const onScroll = useCallback(() => {
    const parent = document.documentElement;
    const { scrollTop, clientHeight } = parent;
    const { top: parentTop } = parent.getBoundingClientRect();
    const target = targetRef.current;
    const { bottom: targetBottom } = target.getBoundingClientRect();
    if ((scrollTop + clientHeight) > (targetBottom - parentTop)) {
      if (flag) {
        console.log('请等待一秒');
        setTimeout(() => {
          add(10);
          flag = true;
        }, 1000);
        flag = false;
      }
    }
    console.log(`parent.scrollTop=${scrollTop + clientHeight}, target.bottom=${targetBottom - parentTop}`);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <div
      className="container"
      style={{ padding: '10px 10px' }}
    >
      ScrollIngLoad
      <div
        className="top-block"
        style={{ height: 200 }}
      />
      <div
        className="target"
        style={{ marginBottom: 100, borderBottom: '1px solid black' }}
        ref={targetRef}
      >
        {
          data.map((item) => (
            <div
              className="item"
              key={item.id}
              style={{ height: item.height, lineHeight: `${item.height}px` }}
            >
              {item.title}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Index;
