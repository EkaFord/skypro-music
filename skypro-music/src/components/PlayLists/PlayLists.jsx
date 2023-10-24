import React from "react";
import PlayList from "../PlayList/PlayList";
import { useContext } from 'react';
import LoadingContext from '../context';

const PlayLists = () => {
    const { loading, setLoading } = useContext(LoadingContext)

  return (
    <div className="sidebar__list">
      {loading ?
        <div className="sidebar__item-skeleton sidebar__item"></div>
        :
        <PlayList />}
      {loading ?
        <div className="sidebar__item-skeleton sidebar__item"></div>
        :
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </div>
      }
      {loading ?
        <div className="sidebar__item-skeleton sidebar__item"></div>
        :
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </div>
      }
    </div>
  );
}

export default PlayLists;