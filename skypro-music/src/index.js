import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./components/AudioPlayer/AudioPlayer.css";
import "./components/NavMenu/NavMenu.css";
import "./components/BurgerMenu/BurgerMenu.css";
import "./components/TrackList/TrackList.css";
import "./components/TracksBlock/TracksBlock.css";
import "./components/Track/Track.css";
import "./components/SideBar/SideBar.css";
import "./components/TrackSkeleton/TrackSkeleton.css";
import "./components/PlayLists/PlayLists.css";
import "./components/PlayList/PlayList.css";
import "./components/FilterButtons/FilterButtons.css";
import "./components/AudioPlayerLoad/AudioPlayerLoad.css";

import App from './App';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals