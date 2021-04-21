import React from "react";
import Note from "../Note/Note";
import { converter } from "../../utils/utils";
import "./Notes.scss";

function Notes({ notes, openNote, currentNoteId }) {
  return (
    <div className="notes">
      {notes.length > 0 &&
        notes.map(note => (
          <Note
            preview={converter.toText(note)}
            title={note.title}
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
