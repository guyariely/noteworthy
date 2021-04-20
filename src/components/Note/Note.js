import React from "react";
import "./Note.scss";

function Note({ title, id, openNote }) {
  return (
    <div className="note-container" key={id}>
      <div className="note" onClick={() => openNote(id)}>
        <h4 className="note-title">{title}</h4>
        {/* TODO: put actual preview text */}
        <p className="note-preview">some preview text of the note</p>
      </div>
    </div>
  );
}

export default Note;
