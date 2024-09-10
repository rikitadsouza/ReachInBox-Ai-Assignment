import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Reply = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleSend = () => {
    // Post to the API
    console.log(editorContent);
  };

  return (
    <div>
      <ReactQuill value={editorContent} onChange={setEditorContent} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Reply;
