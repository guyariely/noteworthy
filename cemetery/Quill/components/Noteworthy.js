
import React from 'react';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Quill from 'quill'; 
import 'quill/dist/quill.snow.css';
import 'katex/dist/katex.css';
import 'highlight.js/styles/atom-one-dark.css';

class Noteworthy extends React.Component {

  componentDidMount() {

    const quill = new Quill('#editor', {
      modules: {
        syntax: true,
        toolbar: '#toolbar' 
      }
    });
  }

  render() {

    return (
      <div>
        <div id="editor-container">          
          <Toolbar />
          <Editor />
        </div>
      </div>
    );
  }
}

export default Noteworthy;


