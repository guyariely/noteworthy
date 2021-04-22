import React, { useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import Sidebar from "../Sidebar/Sidebar";
import ThemesModal from "../ThemesModal/ThemesModal";
import { converter } from "../../utils/utils";
import { useEditor } from "../../hooks/hooks";
import "./App.scss";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [themeModalIsOpen, setThemeModalIsOpen] = useState(false);
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(false);
  const editor = useEditor();

  function collapseSidebar() {
    setSidebarIsCollapsed(sidebarIsCollapsed => !sidebarIsCollapsed);
  }

  function getSearchResults() {
    const searchResults = editor.notes.filter(note =>
      converter.toText(note).toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchResults;
  }

  return (
    <div id="app-container">
      <Sidebar
        isCollapsed={sidebarIsCollapsed}
        openNote={editor.openNote}
        notes={searchInput ? getSearchResults() : editor.notes}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        currentNoteId={editor.currentNoteId}
      />
      <TextEditor
        editorState={editor.editorState}
        isCollapsed={sidebarIsCollapsed}
        collapseSidebar={collapseSidebar}
        toggleThemesModal={() => setThemeModalIsOpen(isOpen => !isOpen)}
        toggleBlockType={editor.toggleBlockType}
        toggleInlineStyle={editor.toggleInlineStyle}
        onChangeEditorState={editorState => editor.setEditorState(editorState)}
        addNote={editor.addNote}
        deleteNote={editor.deleteNote}
        disable={editor.notes.length === 0}
      />
      <ThemesModal
        isOpen={themeModalIsOpen}
        toggleThemesModal={() => setThemeModalIsOpen(isOpen => !isOpen)}
      />
    </div>
  );
}

export default App;
