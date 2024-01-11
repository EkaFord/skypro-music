import React, { useEffect } from "react";
import { useContext } from 'react';
import Context from '../../contexts';
import * as S from "./MyPlayListStyles"
import TracksBlock from "../../components/TracksBlock/TracksBlock";
import { useDispatch } from "react-redux";
import { useGetFavoritesTracksQuery } from "../../query/tracks";
import { getFavoriteTracks, getCurrentPage } from "../../store/slices/track";

export const MyPlaylist = () => {
  const dispatch = useDispatch();

  dispatch(getCurrentPage('favorites'))

  const { setIsMainPage } = useContext(Context)
  setIsMainPage(false);

  const { data, isLoading } = useGetFavoritesTracksQuery();
  dispatch(getFavoriteTracks(data))

  return (
    <div>
      <S.CenterblockH2>Мой плейлист</S.CenterblockH2>
      <TracksBlock isLoading={isLoading} />
    </div>
  );
};