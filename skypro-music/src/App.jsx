import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <TrackList />
            <SideBar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
    </div>
  );
}

export default App;
