import React from 'react';
import ReactWEditor from 'wangeditor-for-react';

const Index = () => {
  console.log('Index.jsx');
  return (
    <div>
      <ReactWEditor
        defaultValue="<h1>标题</h1>"
        linkImgCallback={(src, alt, href) => {
          // 插入网络图片的回调事件
          console.log('图片 src ', src);
          console.log('图片文字说明', alt);
          console.log('跳转链接', href);
        }}
        onlineVideoCallback={(video) => {
          // 插入网络视频的回调事件
          console.log('插入视频内容', video);
        }}
        onChange={(html) => {
          console.log('onChange html:', html);
        }}
        onBlur={(html) => {
          console.log('onBlur html:', html);
        }}
        onFocus={(html) => {
          console.log('onFocus html:', html);
        }}
        config={{
          fontSizes: {
            'x-small': { name: '10px', value: '1' },
            small: { name: '12px', value: '2' },
            normal: { name: '16px', value: '3' },
            large: { name: '18px', value: '4' },
            'x-large': { name: '24px', value: '5' },
            'xx-large': { name: '32px', value: '6' },
            'xxx-large': { name: '48px', value: '7' },
          },
          uploadVideoServer: '/api/upload-video',
          uploadImgServer: '/upload-img',
        }}
      />
    </div>
  );
};

export default Index;
