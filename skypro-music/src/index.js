import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./components/AudioPlayer.css";
import "./components/NavMenu.css";
import "./components/TrackList.css";
import "./components/TracksBlock.css";
import "./components/Track.css";
import "./components/SideBar.css";
import "./components/PlayList.css";
import App from './App';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);