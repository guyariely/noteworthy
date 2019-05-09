
import React from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {

    return (
      <div>
        <h1 className="header">Noteworthy</h1>

        <ReactQuill 
          value={this.state.text}
          onChange={this.handleChange} 
          modules={Editor.modules}
        />
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ]
};

export default Editor;

