import './App.css';
import AudioPlayer from "./components/AudioPlayer";
import NavMenu from "./components/NavMenu";
import TrackList from "./components/TrackList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div><div className="wrapper">
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
