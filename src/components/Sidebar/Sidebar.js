import React from 'react';
import Notebooks from './Notebooks';
import Notes from './Notes';
import Account from './Account';
import Search from './Search';

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

        <div className="right-sidebar">
          <Search />
          {/*<NewNote newNote={props.newNote} />*/}
          <Notes openNote={openNote} />
        </div>
      </aside>
    );
};
  

export default Sidebar;