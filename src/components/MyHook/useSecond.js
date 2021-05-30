import { useEffect } from 'react';

const useSecond = (setValue) => {
  console.log('自定义hooks调用: useSecond');
  useEffect(() => { // 状态已经保存
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 100);
    // debugger;
  });
  // 同步更新
  return null;
};

export default useSecond;
// useSecond 触发更新//下一个三秒之后在次执行，useFuck的红任务等待下一轮
// useFuck的红任务触发，所以内部的重新走一遍
