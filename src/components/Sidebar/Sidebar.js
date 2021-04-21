import React from "react";
import Notes from "../Notes/Notes";
import Search from "../Search/Search";
import "./Sidebar.scss";

const Sidebar = props => {
  const className = props.isCollapsed ? "sidebar collapsed" : "sidebar";

  return (
    <aside className={className}>
      <div className="sidebar-header">
        <Search
          searchInput={props.searchInput}
          setSearchInput={props.setSearchInput}
        />
      </div>
      <Notes
        currentNoteId={props.currentNoteId}
        openNote={props.openNote}
        notes={props.notes}
      />
    </aside>
  );
};

export default Sidebar;
