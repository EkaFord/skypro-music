import { createGlobalStyle } from "styled-components";
import * as S from "./pages/main/mainStyles";
import { AppRoutes } from "./routes";
import { useState } from "react";
import Context from "./contexts";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrentTrack } from "./store/slices/track";

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
      url("../fonts/StratosSkyeng.woff2") format("woff2"),
      url("../fonts/StratosSkyeng.woff") format("woff");
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
`;
function App() {
  const dispatch = useDispatch();

  // const curTrack = useSelector(store => store.track.currentTrack)
  // const curTrack1 = useSelector(state => state.track.currentTrack)

  // // console.log(curTrack)
  // // console.log(curTrack1)


  // const allTracks = useSelector(state => state.track.allTracks)


  const [user, setUser] = useState(localStorage.getItem('login'));

  const handleLogin = ({ setUser }) => {
    const getuser = localStorage.getItem('login');
    setUser(getuser);
  }

  const addLogin = (email) => {
    localStorage.setItem('login', email);
    setUser(email);

  }

  const handleLogOut = () => {
    localStorage.removeItem('login')
    dispatch(resetCurrentTrack(null))
  }

  return (
    <>
      <Context.Provider
        value={{ handleLogin, user, setUser, addLogin, handleLogOut }}>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <AppRoutes />
          </S.Container>
        </S.Wrapper>
      </Context.Provider>
    </>
  );
}

export default App;
