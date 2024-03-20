import { createGlobalStyle } from 'styled-components';
import * as S from "./pages/main/mainStyles"
import { AppRoutes } from "./routes";
import { useState } from "react";
import Context from './contexts';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrentTrack, getAllTracks } from "./store/slices/track";
import { getTodos } from './api';


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
      url("/fonts/StratosSkyeng.woff2") format("woff2"),
      url("/fonts/StratosSkyeng.woff") format("woff");
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
  const dispatch = useDispatch();
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

  const userId = useSelector(state => state.user.id)
  const [isMainPage, setIsMainPage] = useState(true)
  console.log(userId)
  // useEffect(() => {
  //   getTodos()
  //     .then((tracks) => {
  //       console.log("done")
  //       // dispatch(getAllTracks(tracks))
  //       // setTracks(tracks);
  //     }).catch(() => {
  //       setAddTracksError(true);
  //     }).finally(() => {
  //       setLoadings(false);
  //     })
  // }, [])


  return (
    <>
      <Context.Provider
        value={{ handleLogin, user, setUser, addLogin, handleLogOut, isMainPage, setIsMainPage }}>
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