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
              <h4 className="note-title">
                {noteTitle}
              </h4>
              <p>some preview text of the note</p>
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