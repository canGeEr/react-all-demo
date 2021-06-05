import React, { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Index = () => {
  const editorRef = useRef({
    editor: null,
  });
  useEffect(() => {
    ClassicEditor
      .create(document.getElementById('editor'))
      .then((editor) => {
        editorRef.current = editor;
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div id="editor" />
    </>
  );
};

export default Index;
