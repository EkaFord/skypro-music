import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import * as S from "./AppStyles"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/SideBar/SideBar";
import LoadingContext from './components/context';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
`


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
     const timeout = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timeout); 
  }, [])

  return (
    
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <GlobalStyle />
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

export default App;