import React from 'react';

const baseImage = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e136586f0c3fa8012060c888a263.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624847490&t=552a17c5735eb4ca882b8f568d502f6a';

/*
  获取所有的img图片，遍历图片，判断图片是否已经加载，如果未加载，贼判断是否出现在可见区域，如果出现在可见区域，那么加载图片
  1. 优化手段，如果判断图片是否已经加载
  2. 加载完成的图片是不需要再次检测的，是否需要，可以直接使用Map数据结构存储信息，键为元素，值为是否展示

*/
const ImageAsyncLoad = () => {
  console.log('ImageAsyncLoad');
  return (
    <div className="image-async-load">
      ImageAsyncLoad
    </div>
  );
};

export default ImageAsyncLoad;
