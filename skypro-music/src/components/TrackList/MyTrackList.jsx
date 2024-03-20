import React from "react";
import TracksBlock from "../TracksBlock/TracksBlock";
import FilterButtons from "../FilterButtons/FilterButtons";
import * as S from "./MyTrackListStyles"
import { useContext } from 'react';
import Context from '../../contexts';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../../store/slices/track";


const MyTrackList = () => {

  const dispatch = useDispatch();
  dispatch(getCurrentPage('main'))

  const { setIsMainPage } = useContext(Context)
  setIsMainPage(true)


  return (
    <>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
          <FilterButtons />
        </S.CenterblockFilter>
        <TracksBlock />
    </>
  );
};

export default MyTrackList