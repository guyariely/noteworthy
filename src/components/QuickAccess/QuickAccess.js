import React from "react";
import QuickAccessButton from "../QuickAccessButton/QuickAccessButton";
import "./QuickAccess.scss";

const QuickAccess = props => {
  return (
    <div className="quick-access">
      <QuickAccessButton
        type="add"
        handleClick={props.addNote}
        isSidebarCollapsed={props.isSidebarCollapsed}
      />
      <QuickAccessButton
        type="delete"
        handleClick={props.deleteNote}
        isSidebarCollapsed={props.isSidebarCollapsed}
      />
      <QuickAccessButton
        type="themes"
        handleClick={props.toggleThemesModal}
        isSidebarCollapsed={props.isSidebarCollapsed}
      />
      <QuickAccessButton
        type="expand"
        handleClick={props.collapseSidebar}
        isSidebarCollapsed={props.isSidebarCollapsed}
      />
    </div>
  );
};

export default QuickAccess;
