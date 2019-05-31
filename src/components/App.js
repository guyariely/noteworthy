import React from 'react';
import TextEditor from './Editor/TextEditor';
import Sidebar from './Sidebar/Sidebar';
import ThemesModal from './Modals/ThemesModal';

class App extends React.Component {

  constructor(props) {
     super(props);
     this.collapseSidebar = this.collapseSidebar.bind(this);
     this.toggleThemesModal = this.toggleThemesModal.bind(this);
     this.openNote = this.openNote.bind(this);
     this.newNote = this.newNote.bind(this);

     this.state = {
      sidebarIsCollapsed: false,
      isOpen: false
    };
  }

  collapseSidebar() {
    this.setState((prevState) => {
      return {
        sidebarIsCollapsed: !prevState.sidebarIsCollapsed
      };
    });
  }

  toggleThemesModal() {
    this.setState((prevState) => {
      return ({isOpen: !prevState.isOpen});
    });
  }

  openNote(noteTitle) {
    this.refs.textEditor.openNote(noteTitle);
  }

  newNote(noteTitle) {
    this.refs.textEditor.newNote(noteTitle);
  }

  render() {
    
    return (
      <div id="app-container">

        <Sidebar 
          isCollapsed={this.state.sidebarIsCollapsed}
          openNote={this.openNote}
          newNote={this.newNote}
        />

        <TextEditor 
          isCollapsed={this.state.sidebarIsCollapsed}
          collapseSidebar={this.collapseSidebar}
          toggleThemesModal={this.toggleThemesModal}
          ref="textEditor"
        />

        <ThemesModal
          isOpen={this.state.isOpen}
          toggleThemesModal={this.toggleThemesModal}
        />
        
      </div>
    );
  }

  
}

export default App;