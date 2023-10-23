import React from "react";
import TracksBlock from "../TracksBlock/TracksBlock";
import FilterButtons from "../FilterButtons/FilterButtons";

const TrackList = () => {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterButtons />
      </div>
      <TracksBlock />
    </div>
  );
};

export default TrackList;
