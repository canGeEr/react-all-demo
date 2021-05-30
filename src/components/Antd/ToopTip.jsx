import React, { useRef, useState, useEffect } from 'react';
import { Tooltip } from 'antd';

let count = -1;
const data = (new Array(100).fill(0)).map(() => {
  count += 1;
  return ({
    id: count,
    title: `${count}列表`,
  });
});

const ToopTip = () => {
  const containerRef = useRef();

  return (
    <Tooltip
      overlayClassName="MyOPtion"
      defaultVisible
      title="prompt text"
      mouseEnterDelay={0}
      mouseLeaveDelay={0}
      getPopupContainer={() => containerRef.current}
      placement="right"
    >
      <div
        className="conatiner"
        style={{
          overflowY: 'scroll', height: 500, width: 500, border: '1px solid black',
        }}
        ref={containerRef}
      >

        <div className="item-box">
          {data.map((item) => (
            <div className="item" key={item.id} style={{ padding: '10px 0px' }}>{item.title}</div>
          ))}
        </div>
      </div>
    </Tooltip>
  );
};

export default ToopTip;
