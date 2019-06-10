import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';


const NewNote = props => {

  const newNote = () => {
    const noteTitle = prompt('enter a note title');
    props.newNote(noteTitle);
  };
 
  return (
    <span 
      className="util new-note"
      onClick={newNote}
      >
      <FontAwesomeIcon icon={faEdit} />
    </span>
  );
};

export default NewNote;