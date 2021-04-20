import React, { useEffect, useRef, useState } from "react";
import TextEditor from "./Editor/TextEditor";
import Sidebar from "./Sidebar/Sidebar";
import ThemesModal from "./Modals/ThemesModal";
import defaultNotes from "../defaultNotes";
import { EditorState, convertFromRaw, RichUtils, convertToRaw } from "draft-js";
import { v4 as uuid } from "uuid";

const converter = {
  toContent: editorState => convertToRaw(editorState.getCurrentContent()),
  toEditorState: note => {
    return EditorState.createWithContent(convertFromRaw(note.content));
  },
};

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(savedNotes || defaultNotes);
  }, []);

  useEffect(() => {
    // first render, boot up notes from storage
    if (!currentNoteId && notes.length > 0) {
      setCurrentNoteId(notes[0].id);
      setEditorState(converter.toEditorState(notes[0]));
      // all notes were deleted, create a new one
    } else if (currentNoteId && notes.length === 0) {
      const emptyNote = createEmptyNote();
      setNotes([emptyNote]);
      setCurrentNoteId(emptyNote.id);
      setEditorState(converter.toEditorState(emptyNote));
    }
  }, [notes.length, currentNoteId]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0) {
      editorRef.current.focus();
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

  function onChangeEditorState(editorState) {
    setEditorState(editorState);
  }

  function openNote(id) {
    setCurrentNoteId(id);
    const noteToOpen = notes.find(note => note.id === id);
    setEditorState(converter.toEditorState(noteToOpen));
  }

  function addNote(title) {
    if (title === null) return;

    const newNote = createEmptyNote(title);
    setNotes([...notes, newNote]);
    setCurrentNoteId(newNote.id);
    setEditorState(converter.toEditorState(newNote));
  }

  function createEmptyNote(title) {
    const newNote = {
      id: uuid(),
      title: title,
      content: converter.toContent(EditorState.createEmpty()),
    };
    return newNote;
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  }

  function collapseSidebar() {
    setSidebarIsCollapsed(sidebarIsCollapsed => !sidebarIsCollapsed);
  }

  function toggleThemesModal() {
    setModalIsOpen(modalIsOpen => !modalIsOpen);
  }

  function toggleBlockType(blockType) {
    onChangeEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(style) {
    onChangeEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return (
    <div id="app-container">
      <Sidebar
        isCollapsed={sidebarIsCollapsed}
        openNote={openNote}
        notes={notes}
      />
      <TextEditor
        editorState={editorState}
        isCollapsed={sidebarIsCollapsed}
        collapseSidebar={collapseSidebar}
        toggleThemesModal={toggleThemesModal}
        toggleBlockType={toggleBlockType}
        toggleInlineStyle={toggleInlineStyle}
        onChangeEditorState={onChangeEditorState}
        addNote={addNote}
        deleteNote={deleteNote}
        editorRef={editorRef}
      />
      <ThemesModal isOpen={modalIsOpen} toggleThemesModal={toggleThemesModal} />
    </div>
  );
}

export default App;
