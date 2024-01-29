import * as S from "./mainStyles"
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import MyTrackList from "../../components/TrackList/MyTrackList.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import Search from "../../components/Search/Search.jsx"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";



export function Main() {

  const currentTrackS = useSelector(state => state.track.currentTrack)

  return (

    <div>
      <S.Wrapper>
        <S.Container>
          <S.Main className="main">
            <NavMenu />
            <S.MainCenterblock>
              <Search />
              <MyTrackList />
            </S.MainCenterblock>
            <SideBar />
          </S.Main>
          {currentTrackS ? <AudioPlayer /> : null}
          
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}