import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       notesList: Object.keys(window.localStorage)
     };
  }

  render() {

    const openNote = e => {
      this.props.openNote(e.target.innerHTML);
    };
    
    const className = this.props.isCollapsed ? "sidebar-container collapsed" : "sidebar-container";

    return (
      <aside className={className}>
          <div className="sidebar">
          <h1>Sidebar</h1>
          {
            this.state.notesList.map((noteTitle, index) => {
              if (index == 0) return;
              return (
                <p 
                  className="note" 
                  key={noteTitle}
                  onMouseDown={openNote}
                >
                  {noteTitle}
                </p>
              );
            })
          }
        </div>
      </aside>
    );
  }
}
  

export default Sidebar;