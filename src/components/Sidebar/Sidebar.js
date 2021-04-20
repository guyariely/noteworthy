import React from "react";
import Notes from "../Notes/Notes";
import Search from "../Search/Search";
import NewNote from "../Utils/NewNote";
import "./Sidebar.scss";

const Sidebar = props => {
  const className = props.isCollapsed ? "sidebar collapsed" : "sidebar";

  return (
    <aside className={className}>
      <div className="sidebar-header">
        <Search />
        <NewNote createNote={props.createNote} />
      </div>
      <Notes openNote={props.openNote} notes={props.notes} />
    </aside>
  );
};

export default Sidebar;
