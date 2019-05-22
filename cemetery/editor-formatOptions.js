
import React from 'react';
import Quill from 'quill'; 
import 'quill/dist/quill.core.css';
import 'katex/dist/katex.css';
import 'highlight.js/styles/atom-one-dark.css';

class Editor extends React.Component {

  componentDidMount() {

    const formatOptions = [
      {'header': [1, 2, null]}, 
      'bold', 'italic', 'underline', { 'background': ['#ffbf98'] },
      { 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' },
      'blockquote',
      'link', 'image',
      { 'direction': 'rtl' },                   
      'code-block', 'code', 'formula'
    ];

    const quill = new Quill('#editor', {
      modules: {
        syntax: true,
        toolbar: formatOptions
      }
    });
  }

  render() {

    return (
      <div>
        <div id="editor-container">
          <div id="editor"></div>
        </div>
      </div>
    );
  }
}


export default Editor;


