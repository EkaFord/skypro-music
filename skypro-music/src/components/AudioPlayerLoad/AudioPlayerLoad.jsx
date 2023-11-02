import React from "react";
import * as S from "../AudioPlayer/AudioPlayerStyles.js"


const AudioPlayerLoad = () => {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImageSkeleton>
      </S.TrackPlayImageSkeleton>
      <S.TrackPlaySkeleton>
      </S.TrackPlaySkeleton>
      <S.TrackPlaySkeleton>
      </S.TrackPlaySkeleton>
    </S.TrackPlayContain>
  );
};

export default AudioPlayerLoad;