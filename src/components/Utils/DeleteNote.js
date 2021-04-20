import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

const DeleteNote = props => {
  return (
    <span className="util delete-note" onClick={props.deleteNote}>
      <FontAwesomeIcon icon={faRecycle} />
    </span>
  );
};

export default DeleteNote;
