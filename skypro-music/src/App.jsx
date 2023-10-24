import { useEffect, useState } from 'react';
import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList/TrackList";
import SideBar from "./components/SideBar/SideBar";
import LoadingContext from './components/context';

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
    </LoadingContext.Provider>
  );
}

export default App;
