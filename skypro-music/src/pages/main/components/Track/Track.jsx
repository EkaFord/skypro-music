import React from "react";
import * as S from "./TrackStyles"

const Track = () => {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div>
            <S.TrackTitleLink href="http://">
              Guilt <S.TrackTitleSpan/>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            Nero
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            Welcome Reality
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText>4:44</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track