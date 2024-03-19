import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import Context from '../../contexts';
import * as S from "./MyPlayListStyles";
import TracksBlock from "../../components/TracksBlock/TracksBlock";
import { useGetFavoritesTracksQuery } from "../../query/tracks";
import { getFavoriteTracks, getCurrentPage } from "../../store/slices/track";

export const MyPlaylist = () => {
  const dispatch = useDispatch();
  const { setIsMainPage } = useContext(Context);
  const { data, isLoading } = useGetFavoritesTracksQuery();

  useEffect(() => {
    dispatch(getCurrentPage('favorites'));
    setIsMainPage(false);

    if(data) {
      dispatch(getFavoriteTracks(data));
    }
  }, [data, dispatch, setIsMainPage]);

  return (
    <div>
      <S.CenterblockH2>Мой плейлист</S.CenterblockH2>
      <TracksBlock isLoading={isLoading} />
    </div>
  );
};
