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
          <p 
            className="note" 
            key={noteTitle}
            onMouseDown={this.props.openNote}
          >
            {noteTitle}
          </p>
        );
      })
    }
    </div>
  );
 }
}

export default Notes;