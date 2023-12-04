import React, { useEffect } from "react";
import AudioPlayerLoad from "../AudioPlayerLoad/AudioPlayerLoad";
import { useContext, useState, useRef } from "react";
import LoadingContext from "../../context";
import * as S from "./AudioPlayerStyles";
//import ProgressBar from "../ProgressState";
import {
  ProgressInputTrack,
  ProgressInputVolume,
} from "../ProgressInputs/ProgressInput";

const AudioPlayer = () => {
  const { loading, currentTrack } = useContext(LoadingContext);
  const [isPlaying, setPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const ref = useRef(0);

  const handleStart = () => {
    ref.current.play();
  };

  useEffect(handleStart, [currentTrack]);

  const handleStop = () => {
    ref.current.pause();
  };

  function sToStr(s) {
    const minutes = Math.floor(s / 60);
    const seconds = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${String(minutes).padStart(2, "0")}:${seconds}`;
  }

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(sToStr(ref.current.currentTime));
      setDuration(sToStr(ref.current.duration));
    }, 1000);
    return () => clearTimeout(interval);
  }, [currentTrack]);

  const handleRepeat = () => {
    ref.current.loop = !isRepeat;
    setIsRepeat(!isRepeat);
  };

  const awaitImplementation = () => {
    alert("Functionality not implemented yet");
  };

  return (
    <>
      <audio
        ref={ref}
        src={currentTrack.track_file}
        controls="controls"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></audio>
      <S.Bar>
        <S.BarContent>
          <S.TimeCode>
            {currentTime} / {duration}
          </S.TimeCode>
          <ProgressInputTrack ref={ref} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg onClick={awaitImplementation} alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                {isPlaying ? (
                  <S.PlayerBtnPlay onClick={handleStop}>
                    <S.PlayerBtnPlaySvg as="svg" alt="play">
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="5" height="19" fill="#D9D9D9" />
                        <rect x="10" width="5" height="19" fill="#D9D9D9" />
                      </svg>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                ) : (
                  <S.PlayerBtnPlay onClick={handleStart}>
                    <S.PlayerBtnPlaySvg as="svg" alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                )}
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg onClick={awaitImplementation} alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                {isRepeat ? (
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatActiveSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatActiveSvg>
                  </S.PlayerBtnRepeat>
                ) : (
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                )}
                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg
                    onClick={awaitImplementation}
                    alt="shuffle"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                {loading ? (
                  <AudioPlayerLoad />
                ) : (
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink xlinkHref="http://">
                        {currentTrack.name}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink xlinkHref="http://">
                        {currentTrack.author}
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                )}

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike onClick={awaitImplementation}>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike onClick={awaitImplementation}>
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <ProgressInputVolume ref={ref} />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
};

export default AudioPlayer;
