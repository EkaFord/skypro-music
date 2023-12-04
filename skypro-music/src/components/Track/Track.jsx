import React from "react";
import * as S from "./TrackStyles";
import { useContext } from "react";
import LoadingContext from "../../context";
import TrackSkeleton from "../TrackSkeleton/TrackSkeleton";

const Track = () => {
  const { tracks, loadings, addTracksError, setCurrentTrack } =
    useContext(LoadingContext);

  const secondsToTime = (seconds) => {
    const minutes = Math.trunc(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <>
      {loadings && <TrackSkeleton />}
      {addTracksError && (
        <p>Failed to load playlist. Please try again later.</p>
      )}
      {tracks.map((track) => (
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack>
            <S.TrackTitle onClick={() => setCurrentTrack(track)}>
              <S.TrackTitleImage>
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
              <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>
                {secondsToTime(track.duration_in_seconds)}
              </S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </>
  );
};

export default Track;
