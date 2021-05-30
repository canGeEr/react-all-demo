import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import lockFun from '@/utils/lockFun.js';

// 下拉滚动加载（无限滚动，列表的一直请求逻辑）
/*
  1. 确认期盼窗口容器 ScrollContainer 和 目标元素 showTarget
  2. 获取他们之间的视觉距离 + 目标元素的高度，distance = showTarget.getBoundingClient().bottom - ScrollContainer.getBoundingClient().top
  3. 获取窗口容器的 clientHeight，scrollTop
  4. scrollTop + clientHeight > distance

  拓展：
    1. 锁闭包；用闭包实现锁，减少全局变量
    2. 通过throttle，节流函数进行onSCroll性能优化
*/

let count = 0;

let timerId = null;

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

  const onScroll = useCallback(lockFun(({ isLock, setLock }) => {
    const parent = document.documentElement;
    const { scrollTop, clientHeight } = parent;
    const { top: parentTop } = parent.getBoundingClientRect();
    const target = targetRef.current;
    if (target) {
      const { bottom: targetBottom } = target.getBoundingClientRect();
      if ((scrollTop + clientHeight) > (targetBottom - parentTop)) {
        if (isLock()) {
          console.log(`parent.scrollTop=${scrollTop + clientHeight} \ntarget.bottom=${targetBottom - parentTop}，触发异步请求更新，请等待一秒!`);
          timerId = setTimeout(() => {
            add(10);
            setLock(true);
          }, 1000);
          setLock(false);
        }
      }
    }
  }, true), []);

  useEffect(() => {
    console.log('执行了useEffect绑定');
    window.addEventListener('scroll', onScroll, false);
    return () => {
      console.log('解除了useEffect绑定');
      window.removeEventListener('scroll', onScroll, false);
      clearTimeout(timerId);
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
// useEffect清除函数，需要清楚所有的副作用效果

export default Index;
