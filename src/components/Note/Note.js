import React from "react";
import { nthBlockWithText } from "../../utils/utils";
import "./Note.scss";

function Note({ id, blocks, openNote, active }) {
  const title = nthBlockWithText(blocks, 1);
  const preview = nthBlockWithText(blocks, 2);

  return (
    <div className={`note-container ${active ? "active" : ""}`}>
      <div className="note" onClick={() => openNote(id)}>
        <h4 className="note-title">{title || "New Note"}</h4>
        <p className="note-preview">{preview || "No additional text"}</p>
      </div>
    </div>
  );
}

export default Note;
