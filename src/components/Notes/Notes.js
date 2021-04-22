import React from "react";
import Note from "../Note/Note";
import "./Notes.scss";

function Notes({ notes, openNote, currentNoteId }) {
  return (
    <div className="notes">
      {notes.length > 0 &&
        notes.map(note => (
          <Note
            blocks={note.content.blocks}
            id={note.id}
            key={note.id}
            openNote={openNote}
            active={currentNoteId === note.id}
          />
        ))}
    </div>
  );
}

export default Notes;
