import React from "react";
import Note from "../Note/Note";
import "./Notes.scss";

function Notes({ notes, openNote }) {
  return (
    <div className="notes">
      {notes.length > 0 &&
        notes.map(note => (
          <Note
            title={note.title}
            id={note.id}
            key={note.id}
            openNote={openNote}
          />
        ))}
    </div>
  );
}

export default Notes;
