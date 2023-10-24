import React from "react";
const { useState } = React;

const FilterButtons = () => {

    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const toggleVisibilityAuthor = () => {
        setVisibleAuthor(!visibleAuthor)
        setVisibleGenre(false)
        setVisibleYear(false)
    }

    const toggleVisibilityYear = () => {
        setVisibleAuthor(false)
        setVisibleGenre(false)
        setVisibleYear(!visibleYear)
    }

    const toggleVisibilityGenre = () => {
        setVisibleAuthor(false)
        setVisibleGenre(!visibleGenre)
        setVisibleYear(false)
    }

    return (
        <>
      {visibleAuthor ?
        <div onClick={toggleVisibilityAuthor} className="filter__button button-author _btn-text_active">
          исполнителю
          <div className="filter__box filter__box-author ">
            <ul className="filter__list">
              <li className="filter__item">Nero</li>
              <li className="filter__item">Calvin Harris</li>
              <li className="filter__item">Dynoro</li>
              <li className="filter__item">Ali Bakgor</li>
              <li className="filter__item">Psy</li>
              <li className="filter__item">Jaded</li>
              <li className="filter__item">Blue Foundation</li>
              <li className="filter__item">Tom Boxer</li>
            </ul>
          </div>
        </div>
        :
        <button onClick={toggleVisibilityAuthor} className="filter__button button-author _btn-text">
          исполнителю
        </button>
      }

      {visibleYear ?
        <div onClick={toggleVisibilityYear} className="filter__button button-year _btn-text_active">
          году выпуска
          <div className="filter__box filter__box-year">
            <ul className="filter__list">
              <li className="filter__item">2016</li>
              <li className="filter__item">2017</li>
              <li className="filter__item">2018</li>
              <li className="filter__item">2019</li>
              <li className="filter__item">2020</li>
              <li className="filter__item">2021</li>
              <li className="filter__item">2022</li>
              <li className="filter__item">2023</li>
            </ul>
          </div>
        </div>
        :
        <button onClick={toggleVisibilityYear} className="filter__button button-year  _btn-text">
          году выпуска
        </button>
      }

      {visibleGenre ?
        <div onClick={toggleVisibilityGenre} className="filter__button button-genre _btn-text_active">
          жанру
          <div className="filter__box filter__box-genre">
            <ul className="filter__list">
              <li className="filter__item">classic</li>
              <li className="filter__item">rap</li>
              <li className="filter__item">EDM</li>
              <li className="filter__item">raggae</li>
              <li className="filter__item">country</li>
              <li className="filter__item">pop</li>
              <li className="filter__item">hits</li>
              <li className="filter__item">00 music</li>
            </ul>
          </div>
        </div>
        :
        <button onClick={toggleVisibilityGenre} className="filter__button button-genre _btn-text">
          жанру
        </button>
      }
    </>
  );

};

export default FilterButtons