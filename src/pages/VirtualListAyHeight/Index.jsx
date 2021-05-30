import React, {
  useMemo, useState, useEffect, useRef,
} from 'react';
import faker, { database } from 'faker';

let count = -1;
const data = (new Array(1000).fill(0)).map(() => {
  count += 1;
  return ({
    title: faker.lorem.sentences(),
    id: count,
  });
});

const dataLen = data.length;
const visibleItemsCount = 10;
const defaultItemSize = 80;
const phantom = dataLen * defaultItemSize;
const containerHeight = visibleItemsCount * defaultItemSize;

const Index = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(visibleItemsCount + 1);
  const [startOffset, setStartOffset] = useState(0);
  const itemBox = useRef();
  const itemPosition = useMemo(() => data.map((item, index) => ({
    top: index * defaultItemSize,
    height: defaultItemSize,
  })), []);

  useEffect(() => { // 每次更新之后
    const target = itemBox.current;
    if (target) {
      const itemElements = target.children;
      for (const itemElement of itemElements) {
        const id = +itemElement.dataset.id;
        const { height } = itemElement.getBoundingClientRect();
        const oldHeight = itemPosition[id].height;
        const difValue = height - oldHeight;
        itemPosition[id].height = height;
        for (let ik = id + 1; ik < dataLen; ik += 1) {
          itemPosition[ik].top += difValue;
        }
      }
    }
  });

  const getIndex = (scrollTop) => {
    const startIndex = itemPosition.findIndex((position) => position.top > scrollTop);
    return startIndex - 1;
  };

  const onScroll = (e) => {
    const { scrollTop } = e.target;
    const totalTop = scrollTop + containerHeight;
    const newStart = getIndex(scrollTop);
    const newEnd = getIndex(totalTop) + 1;
    setStart(newStart);
    setEnd(newEnd);
    setStartOffset(itemPosition[newStart].top);
  };

  return (
    <>
      <div
        onScroll={onScroll}
        className="container"
        style={{ height: containerHeight, overflowY: 'scroll', position: 'relative' }}
      >
        <div className="phantom" style={{ height: phantom }} />
        <div
          className="client-box"
          style={{
            position: 'absolute', top: startOffset, height: '100%', width: '100%',
          }}
          ref={itemBox}
        >
          {data.slice(start, end).map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className="item"
              style={{
                boxSizing: 'border-box',
                textAlign: 'center',
                outline: '1px solid black',
                padding: '20px',
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
