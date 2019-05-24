import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       notesList: Object.keys(window.localStorage)
     };
  }

  render() {
    
    const className = this.props.isCollapsed ? "sidebar-container collapsed" : "sidebar-container";

    return (
      <aside className={className}>
          <div className="sidebar">
          <h1>Sidebar</h1>
          {
            this.state.notesList.map(noteTitle => {
              return (
                <p 
                  className="note" 
                  key={noteTitle}
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