import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { playLists } from "../../PlayListsAll.js";
import { useContext } from 'react';
import Context from '../../contexts';
import { useDispatch } from "react-redux";
import { getCategoryTracks, getCurrentPage } from "../../store/slices/track.js";
import { useGetCategoryTracksQuery } from "../../query/tracks.js";
import TracksBlock from "../../components/TracksBlock/TracksBlock.jsx";
import * as S from "./categoriesStyles.js"


export const Category = () => {

  const [currentCutegory, setCurrentCutegory] = useState([])

  const { data, isLoading } = useGetCategoryTracksQuery()
  console.log(data)
  const { setIsMainPage } = useContext(Context)
  setIsMainPage(false)

  const params = useParams();
  console.log(params)

  const playLista = playLists.find((playLista) => playLista.id === Number(params.id));
  const currentPlayList = playLista.id
  console.log(currentPlayList)

  const dispatch = useDispatch();
  dispatch(getCurrentPage('category'))

  useEffect(() => {

    if (data) {
      setCurrentCutegory(data.find(cutegory => cutegory.id === currentPlayList).items)
      // const currentCutegory = data.find(cutegory => cutegory.id === currentPlayList).items
      console.log(currentCutegory)
      dispatch(getCategoryTracks(currentCutegory))
    }
  }, [{data}])

  //  const currentCutegory = data.find(cutegory => cutegory.id === currentPlayList).items



  return (
    <>
      <S.CenterblockH2>{playLista.name}</S.CenterblockH2>
      <TracksBlock isLoading={isLoading} />

    </>
  );
};