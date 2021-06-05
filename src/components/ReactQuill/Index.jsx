import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import { ImageDrop } from 'quill-image-drop-module';
import ckeditor from 'ckeditor';
// window.Quill = Quill;
/* eslint import/first: 'off' */
import { ImageResize } from 'quill-image-resize-module';

Quill.register('modules/imageDrop', ImageDrop);
// Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/better-table', QuillBetterTable);

const Index = () => {
  const editorRef = useRef({
    editor: null,
  });
  console.log('组件更新了');
  useEffect(() => {
    const quill = new Quill('#quill-editor', {
      theme: 'snow',
      modules: {
        // imageDrop: true,
        // ImageResize: true,
        // table: false, // disable table module
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
        toolbar: [
          ['bold', 'italic', 'link', 'image'],
          [{ header: [1, 2, 3, 4, 5, 6, 7, 8, false] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['clean'],
        ],
      },
    });
    editorRef.current = quill;
  }, []);
  return (
    <>
      <div id="quill-editor" />
      <button
        type="button"
        onClick={() => {
          console.log(editorRef.current.getContents()); // JSON.strinfy 就可以
        }}
      >
        点击获取数据
      </button>
    </>
  );
};

export default Index;
