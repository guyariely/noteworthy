import React from 'react';
import Notebooks from './Notebooks';
import Notes from './Notes';
import Account from './Account';

const Sidebar = props => {
  
    const openNote = e => {
      props.openNote(e.target.innerHTML);
    };
    
    const className = props.isCollapsed ? "sidebar collapsed" : "sidebar";

    return (
      <aside className={className}>
        <div className="left-sidebar">
          <Account />
          <Notebooks />
        </div>
        <Notes openNote={openNote} />
      </aside>
    );
};
  

export default Sidebar;