import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import ImageUploader from 'quill-image-uploader';
import MyBolt from './MyBolt';
// import ImageResize from 'quill-image-resize-module';
// import axios from 'axios';

Quill.register('modules/better-table', QuillBetterTable);

Quill.register(MyBolt);
// Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/imageUploader', ImageUploader);
const icons = Quill.import('ui/icons');
icons.MyBolt = '就这';
// console.log(icons);
// icons.MyBolt = '链接'; // 图标的svg可以从iconfont网站复制

/* eslint prefer-arrow-callback: 'off' */
Quill.register('modules/counter', function counter(quill, options) {
  console.log(quill);
  // const container = document.querySelector('#counter');
  quill.on('text-change', () => {
    const text = quill.getText();
    console.log(text, options);
    // // There are a couple issues with counting words
    // // this way but we'll fix these later
    // container.innerText = text.split(/\s+/).length;
  });
});

// const a = Quill.import('modules/counter');
// console.log(a);

// const ColorClass = Quill.import('attributors/class/color'); // 编辑器通过class改变dom的样式
// const ColorStyle = Quill.import('attributors/style/color'); // 编辑器通过style改变dom的样式
// Quill.register(ColorClass, true);
// Quill.register(ColorStyle, true);
const SizeClass = Quill.import('attributors/class/size');
// const SizeStyle = Quill.import('attributors/style/size');
Quill.register(SizeClass, true);
// Quill.register(SizeStyle, true);

const Index = () => {
  const editorRef = useRef({
    editor: null,
  });

  useEffect(() => {
    const quill = new Quill('#quill-editor', {
      theme: 'snow',
      // debug: true,
      // readOnly: true,

      modules: {
        // counter: {
        //   author: '就这',
        // },
        table: false, // disable table module
        'better-table': {
          operationMenu: {
            items: {
              unmergeCells: {
                text: 'Another unmerge cells name',
              },
            },
          },
        },
        keyboard: {
          bindings: QuillBetterTable.keyboardBindings,
        },
        toolbar: {
          container: ['MyBolt'],
          handlers: {
            bold(value) {
              console.log(value);
            },
          },
        },
        // imageResize: {},
        // imageUploader: {
        //   upload: (file) => new Promise((resolve, reject) => {
        //     // const formData = new FormData();
        //     // formData.append('file', file);
        //     // console.log(file);
        //     // return axios('/API/upload/image', {
        //     //   method: 'POST',
        //     //   data: formData,
        //     //   // headers: {
        //     //   //   'Content-Type': 'form-data',
        //     //   // },
        //     // }).then((data) => {
        //     //   resolve(data.url);
        //     // })
        //     //   .catch((error) => {
        //     //     reject(new Error('Upload failed'));
        //     //     console.error('Error:', error);
        //     //   });

        //     setTimeout(() => {
        //       resolve(
        //         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png',
        //       );
        //     }, 1000);
        //   }),
        // },
      },
    });
    quill.clipboard.addMatcher(Node.TEXT_NODE, (node, delta) => console.log(node, delta));
    editorRef.current = quill;

    editorRef.current?.setContents(JSON.parse('{"ops":[{"insert":"1222222\\n"}]}'));
  }, []);
  return (
    <>
      <div id="quill-editor" />
      <button
        type="button"
        onClick={() => {
          console.log(editorRef.current.getContents(), JSON.stringify(editorRef.current.getContents())); // JSON.strinfy 就可以
          console.log(editorRef.current.getText());
          console.log(editorRef.current?.innerHTML);
        }}
      >
        点击获取数据
      </button>
    </>
  );
};

export default Index;
