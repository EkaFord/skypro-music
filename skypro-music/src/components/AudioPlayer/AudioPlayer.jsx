import React, { useEffect, useContext, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayerLoad from '../AudioPlayerLoad/AudioPlayerLoad';
import * as S from './AudioPlayerStyles';
import { ProgresInputTrack, ProgresInputVolume } from '../ProgressInputs/ProgressInput';
import { getIsPlaying, nextTrack, prevTrack, getShuffle } from '../../store/slices/track';
import Context from '../../contexts';
import { useGetTrackQuery, useSetDisLikeMutation, useSetLikeMutation } from '../../query/tracks';

const AudioPlayer = () => {
  const [setLike] = useSetLikeMutation();
  const [setDisLike] = useSetDisLikeMutation();
  const dispatch = useDispatch();
  const currentTrack = useSelector((store) => store.track.currentTrack);
  const shuffle = useSelector((state) => state.track.shuffle);
  const shuffleAllTracks = useSelector((state) => state.track.shuffleAllTracks);
  const currentPlayList = useSelector((state) => state.track.currentPlayList);
  const currentPage = useSelector((state) => state.track.currentPage);
  const arreyAllTracks = shuffle ? shuffleAllTracks : currentPlayList;
  const { loading } = useContext(Context);
  const [isPlaying, setPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const { data, isError, isLoading } = useGetTrackQuery(currentTrack.id);
  const aRef = useRef(null);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  // Define handleStart and handleStop outside of useEffect
  const handleStart = () => {
    aRef.current.play();
    setPlaying(true);
  };

  const handleStop = () => {
    aRef.current.pause();
    setPlaying(false);
  };

  useEffect(() => {
    handleStart(); // Now this call works because handleStart is in the correct scope
  }, [currentTrack]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(sToStr(aRef.current.currentTime));
      setDuration(sToStr(aRef.current.duration));
    };

    const getNextTrack = () => {
      dispatch(nextTrack({ arreyAllTracks, currentTrack }));
    };

    aRef.current.addEventListener('timeupdate', handleTimeUpdate);
    aRef.current.addEventListener('ended', getNextTrack);

    return () => {
      aRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      aRef.current.removeEventListener('ended', getNextTrack);
    };
  }, [arreyAllTracks, currentTrack, dispatch]);

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
    aRef.current.loop = isRepeat;
  };

  function sToStr(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    let sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  const activeLike = (data) => {
    if (data && (currentPage === 'main' || currentPage === 'category')) {
      const userId = localStorage.getItem('id'); // Consider converting to a number if necessary
      const like = data.stared_user.find((user) => user.id.toString() === userId);
      return !!like;
    }
    return false;
  };

  return (
    <>
      <audio ref={aRef} src={currentTrack.track_file} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}></audio>
      <S.Bar>
        <S.BarContent>
          <S.TimeCode >{currentTime} / {duration}</S.TimeCode>
          <ProgresInputTrack ref={aRef} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg onClick={() => { dispatch(prevTrack({ arreyAllTracks, currentTrack })) }} alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                {isPlaying ?
                  <S.PlayerBtnPlay onClick={() => {
                    handleStop();
                    dispatch(getIsPlaying(false));
                  }}>
                    <S.PlayerBtnPlaySvg as="svg" alt="play">
                      <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="5" height="19" fill="#D9D9D9" />
                        <rect x="10" width="5" height="19" fill="#D9D9D9" />
                      </svg>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  :
                  <S.PlayerBtnPlay onClick={() => {
                    handleStart();
                    dispatch(getIsPlaying(true));
                  }}>
                    <S.PlayerBtnPlaySvg as="svg" alt="play">
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                }
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg onClick={() => { dispatch(nextTrack({ arreyAllTracks, currentTrack })) }
                  } alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                {isRepeat ?
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatActiveSvg alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatActiveSvg>
                  </S.PlayerBtnRepeat>

                  :
                  <S.PlayerBtnRepeat onClick={handleRepeat}>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                }
                <S.PlayerBtnShuffle onClick={() => { dispatch(getShuffle(!shuffle)) }}>
                  <S.PlayerBtnShuffleSvg alt="shuffle" $stroke={shuffle} >
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>

                {loading ? <AudioPlayerLoad /> :
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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
                  </S.TrackPlayContain>}

                <S.TrackPlayLikeDis>
                  {
                    activeLike({ data }) || currentPage === 'favorites' ?
                      <S.TrackTimeSvgLike onClick={
                        () => { 
                          setDisLike(currentTrack.id);
                           }} alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                      </S.TrackTimeSvgLike>
                      :
                      <S.TrackTimeSvg onClick={() => { setLike(currentTrack.id) }} alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                      </S.TrackTimeSvg>
                  }



                </S.TrackPlayLikeDis>



              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <ProgresInputVolume ref={aRef} />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar >
    </>
  );
};

export default AudioPlayer;