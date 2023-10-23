import React from "react";
import PlayLists from "../PlayLists/PlayLists";

const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Marina.Skorik</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <PlayLists />
      </div>
    </div>
  );
};

export default SideBar;
