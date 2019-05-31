import React from 'react';
import Notebooks from './Notebooks';
import Notes from './Notes';
import Account from './Account';
import Search from './Search';
import NewNote from '../Editor/Utils/NewNote';

const Sidebar = props => {
  
    const openNote = e => {
      props.openNote(e.target.innerHTML);
    };
    
    const className = props.isCollapsed ? "sidebar collapsed" : "sidebar";

    return (
      <aside className={className}>
        <div className="sidebar-notebooks">
          <Account />
          <Notebooks />
        </div>

        <div className="sidebar-notes">
          <div className="sidebar-notes-header"> 
            <Search />
            <NewNote newNote={props.newNote} />
          </div>
          <Notes openNote={openNote} />
        </div>
      </aside>
    );
};
  

export default Sidebar;