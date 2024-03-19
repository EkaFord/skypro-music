import React, { useEffect } from "react";
import * as S from "./FilterButtonsStyles"
import { useDispatch, useSelector } from "react-redux";
import { getFilters, getAddFiltersAuthore, getFiltersOff, getDaleteFiltersAuthore, getSortDateFilter, getSortDateFilterOff, getDaleteFiltersGenre, getAddFiltersGenre } from "../../store/slices/track";

const { useState } = React;


const FilterButtons = () => {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.track.authors)
  const genres = useSelector(state => state.track.genres)
  const allTracks = useSelector(state => state.track.allTracks)
  const filretsActive = useSelector(state => state.track.filretsActive)
  const filteredTracks = useSelector(state => state.track.filteredTracks)
  const filterSortDateTracks = useSelector(state => state.track.filterSortDateTracks)
  const filterSortDate = useSelector(state => state.track.filterSortDate)
  const filterAuthorTracks = useSelector(state => state.track.filterAuthorTracks)
  const filterAuthor = useSelector(state => state.track.filterAuthor)
  const filterGenreTracks = useSelector(state => state.track.filterGenreTracks)
  const filterGenre = useSelector(state => state.track.filterGenre)

  // console.log(filteredTracks)
  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const [visibleYear, setVisibleYear] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)
  const [defaultSort, setDefaultSort] = useState(true)
  const [newFerst, setNewFerst] = useState(false)
  const [oldFerst, setOldFerst] = useState(false)
  const [sortTitle, setSortTitle] = useState("По умолчанию")
  const [filterNameArr, setFilterNameArr] = useState([])
  const [filterGenreArr, setFilterGenreArr] = useState([])

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

  const sortTime = (filtr) => {
    const filterableArray = filretsActive ? filteredTracks : allTracks
    if (filtr === "defaultS") {
      setDefaultSort(true);
      setNewFerst(false);
      setOldFerst(false)
      setSortTitle("По умолчанию")
      if (filterAuthor || filterGenre) {
        //не уверена в этом куске, проработать позже
        const defaultFilterableArray = [...filteredTracks].sort(function (a, b) {
          return a.id - b.id
        })
        dispatch(getSortDateFilter(defaultFilterableArray))
      } else {
        dispatch(getSortDateFilterOff(allTracks))

      }
    } else {
      let filterableArray = [];
      console.log(filterableArray)
      if (filterAuthor || filterGenre) {
        filterableArray = [...filteredTracks]
      } else {
        filterableArray = [...allTracks]
      }
      const tracksWithDate = [];
      const tracksWithoutDate = [];
      let sortedByDate = [];
      filterableArray.map((track) => {
        if (track.release_date) {
          tracksWithDate.push(track)
          console.log(tracksWithDate)
        } else (
          tracksWithoutDate.push(track)
        )
      })
      if (filtr === "newF") {
        setDefaultSort(false);
        setNewFerst(true);
        setOldFerst(false)
        setSortTitle("Сначала новые")
        console.log(tracksWithDate)
        sortedByDate = tracksWithDate.sort(function (a, b) {
          // console.log(tracksWithDate)
          return new Date(b.release_date) - new Date(a.release_date)
        })
        console.log(sortedByDate)

      } else if (filtr === "oldF") {
        setDefaultSort(false);
        setNewFerst(false);
        setOldFerst(true)
        setSortTitle("Сначала старые")
        sortedByDate = tracksWithDate.sort(function (a, b) {
          return new Date(a.release_date) - new Date(b.release_date)
        })
      }
      const ollTracksSortedByDate = [...sortedByDate, ...tracksWithoutDate]
      dispatch(getSortDateFilter(ollTracksSortedByDate))
    }
  }
  const filtredNameTracs = [];


  const filterName = (filter, name, tipe) => {
    console.log(name)
    console.log(filter)

    if (filter.includes(name)) {
      tipe(filter.filter((filter) => filter !== name))
    } else {
      tipe([...filter, name])
    } 
    // if (filterSortDate) {
    //   const filtredTracks = [...]
    // }
    allTracks.map((track) => { //allTracks потом поменять на массив фильтруемых треков
      // console.log(12)
      // console.log(track)
      // console.log(name)
      if (track.author === name) {
        console.log(name)
        console.log(track.author)
        console.log(filteredTracks)
        // if (filterSortDate) {
        //   console.log(22222)
        //   if (filteredTracks.includes(track)) {
        //     dispatch(getAddFiltersAuthore(track))

        //   } else {
        //     console.log('уже есть в списке')
        //     let newArr = [];

        //     newArr = filteredTracks.filter((track) => track.author !== name)
        //     console.log(newArr)
        //     dispatch(getDaleteFiltersAuthore(newArr))

        //   }

        // } else {

// работающий кусок
          // if (filteredTracks.includes(track)) {
          //   console.log('уже есть в списке')
          //   let newArr = [];

          //   newArr = filteredTracks.filter((track) => track.author !== name)
          //   console.log(newArr)
          //   dispatch(getDaleteFiltersAuthore(newArr))

          // } else {
          //   dispatch(getAddFiltersAuthore(track))

          // }


          if (filterAuthorTracks.includes(track)) {
            console.log('уже есть в списке')
            let newArr = [];

            newArr = filterAuthorTracks.filter((track) => track.author !== name)
            console.log(newArr)
            dispatch(getDaleteFiltersAuthore(newArr))

          } else {
            console.log(54545)
            dispatch(getAddFiltersAuthore(track))

          }


        // }

        // filtredNameTracs.push(track)
      }
      if (track.genre === name ) {
        if (filterAuthor) {


          
        }
        if (filterGenreTracks.includes(track)) {
          console.log('уже есть в списке')
          let newArr = [];

          newArr = filterGenreTracks.filter((track) => track.genre !== name)
          console.log(newArr)
          dispatch(getDaleteFiltersGenre(newArr))

        } else {
          console.log(54545)
          dispatch(getAddFiltersGenre(track))
        }

      }
    })
    // dispatch(getFilters(ollTracksSortedByDate))

    console.log(filtredNameTracs)
  }

  // useEffect(() => {
  //   // console.log(filterNameArr)
  //   // console.log(filterGenreArr)
  //   // console.log(sortTitle)

  //   if (filterNameArr.length === 0 && filterGenreArr.length === 0 && sortTitle === 'По умолчанию') {
  //     // console.log('Фильтры пустые')
  //     dispatch(getFiltersOff())
  //   }

  // }, [filterNameArr, filterGenreArr, sortTitle])


  return (
    <>
      <S.FilterDiv>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButtonBox  >
          <S.FilterButtonAuthor $props={visibleAuthor} onClick={toggleVisibilityAuthor}>
            исполнителю
          </S.FilterButtonAuthor>
          {filterNameArr.length !== 0 ? <S.CounterAuthor>{`${filterNameArr.length}`}</S.CounterAuthor> : null}

          {visibleAuthor &&
            (<S.FilterBox>
              <S.FilterList>
                {authors.map((author) => {
                  // console.log(author)
                  return (
                    <S.FilterItem key={author} onClick={() => { filterName(filterNameArr, author, setFilterNameArr) }} $props={filterNameArr.includes(author)} >{author}</S.FilterItem>
                  )
                })
                }
              </S.FilterList>
            </S.FilterBox>)}
        </S.FilterButtonBox>

        <S.FilterButtonBox >
          <S.FilterButton onClick={toggleVisibilityGenre} $props={visibleGenre} >
            жанру
          </S.FilterButton>
          {filterGenreArr.length !== 0 ? <S.CounterGenre>{`${filterGenreArr.length}`}</S.CounterGenre> : null}

          {visibleGenre && (
            <S.FilterBox>
              <S.FilterListGenre>
                {genres.map((genre) => {
                  return (
                    <S.FilterItem key={genre} onClick={() => { filterName(filterGenreArr, genre, setFilterGenreArr) }} $props={filterGenreArr.includes(genre)} >{genre}</S.FilterItem>
                  )
                })
                }
              </S.FilterListGenre>
            </S.FilterBox>)}
        </S.FilterButtonBox>
      </S.FilterDiv>

      <S.FilterDiv>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterButtonBox>
          <S.FilterButtonTime $props={visibleYear} onClick={toggleVisibilityYear} >
            {sortTitle}
          </S.FilterButtonTime>
          {oldFerst || newFerst ? <S.Counter>1</S.Counter> : null}
          {visibleYear &&
            (<S.FilterBoxTime >
              <S.FilterListGenre >
                <S.FilterItem $props={defaultSort} onClick={() => { sortTime("defaultS") }}>По умолчанию</S.FilterItem>
                <S.FilterItem $props={oldFerst} onClick={() => { sortTime("oldF") }}>Сначала старые</S.FilterItem>
                <S.FilterItem $props={newFerst} onClick={() => { sortTime("newF") }}>Сначала новые</S.FilterItem>
              </S.FilterListGenre>
            </S.FilterBoxTime>)}
        </S.FilterButtonBox>
      </S.FilterDiv>

    </>
  );
};

export default FilterButtons