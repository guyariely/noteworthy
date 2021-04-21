import React, { useEffect, useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import Sidebar from "../Sidebar/Sidebar";
import ThemesModal from "../ThemesModal/ThemesModal";
import defaultNotes from "../../defaultNotes";
import { EditorState, RichUtils } from "draft-js";
import { converter } from "../../utils/utils";
import { v4 as uuid } from "uuid";
import "./App.scss";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(false);
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

  function deleteNote() {
    const updatedNotes = notes.filter(note => note.id !== currentNoteId);
    setNotes(updatedNotes);
    setCurrentNoteId(null);
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

  function getSearchResults() {
    const searchResults = notes.filter(
      note =>
        converter.toText(note).includes(searchInput) ||
        note.title.includes(searchInput)
    );
    return searchResults;
  }

  return (
    <div id="app-container">
      <Sidebar
        isCollapsed={sidebarIsCollapsed}
        openNote={openNote}
        notes={searchInput ? getSearchResults() : notes}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        currentNoteId={currentNoteId}
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
      />
      <ThemesModal isOpen={modalIsOpen} toggleThemesModal={toggleThemesModal} />
    </div>
  );
}

export default App;
