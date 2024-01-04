import React from "react";
import * as S from "./TrackStyles"
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";
import { useContext } from 'react';
import LoadingContext from '../../context';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTrack } from "../../store/slices/track";
import { getIsPlaing } from "../../store/slices/track";


const Track = () => {
  const dispatch = useDispatch();

  const curTrack = useSelector(state => state.track.currentTrack)
  const isPlaing = useSelector(state => state.track.isPlaying)
  // const cutTrackId = useSelector(state => state.track.indexCurrentTrack)



  const { tracks, loadings, addTracksError, setCurrentTrack } = useContext(LoadingContext)

  function sToStr(s) {
    let m = Math.trunc(s / 60) + ''
    s = (s % 60) + ''
    return m.padStart(2, 0) + ':' + s.padStart(2, 0)
  }

  return (
    <>
      {loadings ? <TrackSkeleton /> : null}
      {addTracksError ? <p>Не удалось загрузить плейлист, попробуйте позже</p> : null}
      {tracks.map((track) => {
        return (
          <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle onClick={() => {
                dispatch(getCurrentTrack(track));
                dispatch(getIsPlaing(true));
              }}>
                <S.TrackTitleImage>
                  { isPlaing && track === curTrack  && <S.BlinkingDot></S.BlinkingDot>}
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <div>
                  <S.TrackTitleLink href="#">
                    {track.name} <S.TrackTitleSpan />
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  {track.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">
                  {track.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{sToStr(track.duration_in_seconds)}
                </S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}

    </>
  );
};

export default Track