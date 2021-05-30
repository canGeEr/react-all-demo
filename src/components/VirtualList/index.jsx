import React, { useState, useCallback } from 'react';
import { throttle } from 'lodash';

let count = 0;
const data = (new Array(1000).fill(0)).map(() => {
  count += 1;
  return ({
    title: `id为${count}的列表`,
    id: count,
  });
});
const dataLen = data.length;
const itemSize = 50;
const phantom = dataLen * itemSize;

const Index = () => {
  const [start, setStart] = useState(0);
  const [startOffset, setStartOffset] = useState(0);

  const onScrollHandle = useCallback(throttle((e) => {
    const container = e.target;
    const { scrollTop } = container;
    const newStart = scrollTop / itemSize;
    const newStartOffset = scrollTop - (scrollTop % itemSize);
    setStart(newStart);
    setStartOffset(newStartOffset);
  }, 1000 / 16), []);

  return (
    <>
      <div
        className="container"
        style={{ height: 10 * itemSize, overflowY: 'scroll', position: 'relative' }}
        onScroll={onScrollHandle}
      >
        <div className="phantom" style={{ height: phantom }} />
        <div
          className="client-box"
          style={{
            position: 'absolute', top: startOffset, height: '100%', width: '100%',
          }}
        >
          {data.slice(start, start + 11).map((item) => (
            <div
              key={item.id}
              className="item"
              style={{
                height: itemSize,
                boxSizing: 'border-box',
                lineHeight: `${itemSize}px`,
                textAlign: 'center',
                outline: '1px solid black',
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tip">{ start === data.length - 11 ? '数据展示到底了' : '数据加载中' }</div>
    </>
  );
};

export default Index;
