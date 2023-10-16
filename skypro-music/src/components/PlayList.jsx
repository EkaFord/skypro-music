import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          src="img/playlist01.png"
          alt="day's playlist"
        />
      </a>
    </div>
  );
};

export default SideBar;