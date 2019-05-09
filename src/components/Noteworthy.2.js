
import React from 'react';
import Quill from 'quill'; 
import 'quill/dist/quill.snow.css';
import 'katex/dist/katex.css';
import 'highlight.js/styles/atom-one-dark.css';

class Editor extends React.Component {

  componentDidMount() {

    const formatOptions = [
        ['bold', 'italic', 'underline', 'link'],    
        ['blockquote', 'code-block', 'code'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'direction': 'rtl' }],                   
        [{ 'background': ['#ffbf98'] }],  
        [{'header': [1, 2, null]}],
        ['image', 'formula']
    ];

    const quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        syntax: true,
        toolbar: formatOptions
      }
    });
  }



  render() {

    return (
      <div>
        <h1 className="header">Noteworthy</h1>
        <div id="editor"></div>
      </div>
    );
  }
}


export default Editor;


  //   const toolbar = quill.getModule('toolbar');
  //   toolbar.addHandler('table', () => console.log("table"));

  //   const insertTable = document.querySelector('.ql-table');
  //   insertTable.addEventListener('click', () => {
  //     let range = quill.getSelection();
  //     if (range) {
  //       quill.insertText(range.index, 'table');
  //     }
  //   });


/*
<select className="ql-size">
{
  headings.map((heading) => 
    <option value={heading[0]} key={heading[0]}>
      {heading[1]}
    </option>)
}
</select>

<span className="ql-formats">
{
formats.map((format) => 
  <button 
    className={`ql-${format[0]}`}
    value={format[1] ? format[1] : 'null'}
    key={format[1] ? format[1] : format[0]}>
  </button>
)
} 
</span> 

const headings = [
  ['null', 'Body'], 
  ['large', 'Heading'], 
  ['huge', 'Title']
];

const formats = 
[
  ['background'], ['bold'], ['italic'], ['underline'], ['link'], ['blockquote'],
  ['code'], ['code-block'], ['formula'], ['image'],
  ['list', 'ordered'], ['list', 'bullet'], 
  ['ql-direction', 'rtl']
];
*/

