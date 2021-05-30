import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import lockFun from '@/utils/lockFun.js';
import '@/assets/css/global.css';
// 滚动懒加载（延迟加载，适合做一些大资源的请求逻辑）
/*
  1. 确认期盼窗口容器 ScrollContainer 和 目标元素 showTarget
  2. 获取他们之间的视觉距离，distance = showTarget.getBoundingClient().top - ScrollContainer.getBoundingClient().top
  3. 获取窗口容器的 clientHeight
  4. clientHeight > distance
  拓展：
    2. 通过throttle，节流函数进行onSCroll性能优化
*/

const Index = () => {
  const targetRef = useRef();
  const parentRef = useRef();
  const onScroll = useCallback(lockFun(({ isLock, setLock }) => {
    const parent = parentRef.current;
    const { clientHeight } = parent;
    const distance = targetRef.current.getBoundingClientRect().top - parentRef.current.getBoundingClientRect().top;
    if (distance < clientHeight) {
      console.log('滑到了元素部分');
    }
  }, true), []);

  return (
    <div
      className="container"
      style={{
        padding: '10px 10px', overflowY: 'scroll', height: 400, marginTop: 200,
      }}
      ref={parentRef}
      onScroll={onScroll}
    >
      AsyncLoad
      <div
        className="top-block"
        style={{ height: '200vh' }}
      />
      <div
        className="target"
        style={{
          marginBottom: 100, borderBottom: '1px solid black', height: 200, backgroundColor: '#000',
        }}
        ref={targetRef}
      />
    </div>
  );
};
// useEffect清除函数，需要清楚所有的副作用效果

export default Index;
