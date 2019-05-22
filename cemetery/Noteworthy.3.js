
import React from 'react';


class Noteworthy extends React.Component {
  constructor(props) {
    super(props);
    this.format = this.format.bind(this);
  }

  format(e) {
    e.preventDefault();
    const cmd = e.target.name;
    document.execCommand(cmd, false, null);
    document.getElementById('editor').focus();
    document.getElementById('editor').selectionEnd += 7;
  } 

  render() {
    const cmds = ['bold', 'italic', 'underline'];
    
    return (
      <div>
        <h1 className="header">Hello React!</h1>
        <div className="toolbar">
          {
          cmds.map((cmd) => 
            <button name={cmd} onClick={this.format} id={cmd} key={cmd}>{cmd}</button>)
          }
        </div>
        <div contentEditable="true" className="editor" id="editor">Edit Me</div>
      </div>
    );
  }
}

export default Noteworthy;

