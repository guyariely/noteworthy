import React from "react";
import "./Note.scss";

function Note({ title, id, preview, openNote, active }) {
  console.log(`${title} is ${active ? "active" : "not active"}`);
  return (
    <div className={`note-container ${active ? "active" : ""}`}>
      <div className="note" onClick={() => openNote(id)}>
        <h4 className="note-title">{title}</h4>
        <p className="note-preview">{preview}</p>
      </div>
    </div>
  );
}

export default Note;
