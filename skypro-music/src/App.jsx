import { createGlobalStyle } from "styled-components";
import * as S from "./pages/main/mainStyles";
import { AppRoutes } from "./routes";
import { useState } from "react";
import Context from "./contexts";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = ({ setUser }) => {
    const getuser = localStorage.getItem("login");
    if (getuser) {
      setUser(getuser);
      navigate("/");
    }
  };

  const addLogin = (email) => {
    localStorage.setItem("login", email);
  };

  const handleLogOut = () => {
    localStorage.removeItem("login");
  };

  return (
    <>
      <Context.Provider
        value={{ handleLogin, user, setUser, addLogin, handleLogOut }}
      >
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
