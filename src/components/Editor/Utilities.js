import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faPalette, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const Utilities = props => {

  const newNote = () => {
    const noteTitle = prompt('enter a note title');
    props.newNote(noteTitle);
  };

  return (
    <div className="utils">

      <span 
        className="util expand" 
        onMouseDown={props.collapseSidebar}
      >
        <FontAwesomeIcon 
          icon={props.isCollapsed ? faExpand : faCompress} 
        />
      </span>

      <span className="util">
        <FontAwesomeIcon icon={faPalette} />
      </span>

      <span 
        className="util"
        onMouseDown={props.deleteNote}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>

      <span 
        className="util"
        onMouseDown={newNote}
        >
        <FontAwesomeIcon icon={faPlusSquare}/>
      </span>

    </div>
  );
};

export default Utilities;