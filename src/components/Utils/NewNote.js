import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

const NewNote = ({ createNote }) => {
  return (
    <span
      className="util new-note"
      onClick={() => createNote(prompt("enter a note title"))}
    >
      <FontAwesomeIcon icon={faEdit} />
    </span>
  );
};

export default NewNote;
