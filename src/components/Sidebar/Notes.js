import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: Object.keys(window.localStorage)
    };
 }

 render() {
   
   return (
    <div className="notes">
    {
      this.state.notesList.map((noteTitle) => {
        return (
          <div className="note-container" key={noteTitle}>
            <div 
              className="note" 
              onMouseDown={this.props.openNote}
            >
              <p className="note-title">
                {noteTitle}
              </p>
            </div>
          </div>
        
        );
      })
    }
    </div>
  );
 }
}

export default Notes;