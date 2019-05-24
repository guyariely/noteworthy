import React from 'react';
import TextEditor from './Editor/TextEditor';
import Sidebar from './Sidebar/Sidebar';

class App extends React.Component {

  constructor(props) {
     super(props);
     this.collapseSidebar = this.collapseSidebar.bind(this);
     this.openNote = this.openNote.bind(this);

     this.state = {
      sidebarIsCollapsed: false
    };
  }

  collapseSidebar() {
    this.setState((prevState) => {
      return {
        sidebarIsCollapsed: !prevState.sidebarIsCollapsed
      };
    });
  }

  openNote(noteTitle) {
    this.refs.textEditor.openNote(noteTitle);
  }

  render() {
    
    return (
      <div id="app-container">

        <Sidebar 
          isCollapsed={this.state.sidebarIsCollapsed}
          openNote={this.openNote}
        />

        <TextEditor 
          isCollapsed={this.state.sidebarIsCollapsed}
          collapseSidebar={this.collapseSidebar}
          ref="textEditor"
        />
        
      </div>
    );
  }

  
}

export default App;