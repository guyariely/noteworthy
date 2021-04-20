import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faBook,
  faRecycle,
  faBookmark,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";

const notebooks = [
  "Drafts",
  "App Ideas",
  "Homeworks",
  "Math",
  "Groceries",
  "Drafts",
  "App Ideas",
  "Homeworks",
  "Math",
  "Groceries",
  "Drafts",
  "App Ideas",
  "Homeworks",
  "Math",
  "Groceries",
  "Drafts",
  "App Ideas",
  "Homeworks",
  "Math",
  "Groceries",
];

const Notebooks = () => {
  return (
    <div className="notebooks">
      <div className="notebooks-title">
        <h4>Library</h4>
        <FontAwesomeIcon icon={faPlus} className="icon add-notebook" />
        <FontAwesomeIcon icon={faPen} className="icon edit-notebooks" />
      </div>

      <div className="notebook bookmarks">
        <p>
          <FontAwesomeIcon icon={faBookmark} className="icon" />
          Bookmarks
        </p>
      </div>

      <div className="notebook all-notes">
        <p>
          <FontAwesomeIcon icon={faArchive} className="icon" />
          All Notes
        </p>
      </div>

      {notebooks.map((notebook, i) => {
        return (
          <div className="notebook" key={i}>
            <p>
              <FontAwesomeIcon icon={faBook} className="icon" />
              {notebook}
            </p>
          </div>
        );
      })}

      <div className="notebook recycle-bin">
        <p>
          <FontAwesomeIcon icon={faRecycle} className="icon" />
          Recycle Bin
        </p>
      </div>
    </div>
  );
};

export default Notebooks;
