import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import * as S from "./mainStyles"
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import NavMenu from "../components/NavMenu/NavMenu";
import TrackList from "../components/TrackList/TrackList";
import SideBar from "../components/SideBar/SideBar";
import LoadingContext from '../components/context';



export function Main() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timeout);
  }, [])

  return (

    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div>
        <S.Wrapper>
          <S.Container>
            <S.Main className="main">
              <NavMenu />
              <TrackList />
              <SideBar />
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
          </S.Container>
        </S.Wrapper>
      </div>
    </LoadingContext.Provider>
  );
}