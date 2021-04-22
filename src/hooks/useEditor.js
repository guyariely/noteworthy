import { useEffect, useState } from "react";
import { EditorState, RichUtils } from "draft-js";
import { converter } from "../utils/utils";
import { v4 as uuid } from "uuid";
import defaultNotes from "../defaultNotes";

function useEditor() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(savedNotes || defaultNotes);
  }, []);

  useEffect(() => {
    // runs only once, after notes boots up from storage
    if (!currentNoteId && notes.length > 0) {
      setCurrentNoteId(notes[0].id);
      setEditorState(converter.toEditorState(notes[0]));
    }
  }, [notes, currentNoteId]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) {
      updateNote(editorState);
    }
  }, [editorState]);

  function updateNote(editorState) {
    const updatedNotes = notes.map(note => {
      if (note.id === currentNoteId) {
        note.content = converter.toContent(editorState);
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  function openNote(id) {
    setCurrentNoteId(id);
    const noteToOpen = notes.find(note => note.id === id);
    setEditorState(converter.toEditorState(noteToOpen));
  }

  function addNote() {
    const newNote = createEmptyNote();
    setNotes([...notes, newNote]);
    setCurrentNoteId(newNote.id);
    setEditorState(converter.toEditorState(newNote));
  }

  function createEmptyNote() {
    const emptyEditorState = RichUtils.toggleBlockType(
      EditorState.createEmpty(),
      "header-one"
    );

    const newNote = {
      id: uuid(),
      content: converter.toContent(emptyEditorState),
    };
    return newNote;
  }

  function deleteNote() {
    const updatedNotes = notes.filter(note => note.id !== currentNoteId);
    setNotes(updatedNotes);
    if (updatedNotes.length > 0) {
      setCurrentNoteId(updatedNotes[0].id);
      setEditorState(converter.toEditorState(updatedNotes[0]));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }

  function toggleBlockType(blockType) {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(style) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return {
    notes,
    currentNoteId,
    editorState,
    setEditorState,
    addNote,
    openNote,
    deleteNote,
    toggleBlockType,
    toggleInlineStyle,
  };
}

export { useEditor };
