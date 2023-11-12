import React from "react";
import * as S from "./LoginStyles.js"
import { Link } from "react-router-dom";
import { useState } from "react";



export const Login = ({onClick}) => {

  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "SetLogin" },
  localStorage.setItem('login', 'SetLogin')
  );

  return (
    <S.LoginBox>
      <S.LoginImg src="img/logo_modal.png" alt="" />
      <S.LoginInputEmail placeholder="Почта" type="text" />
      <S.LoginInputPassword placeholder="Пароль" type="text" />
      <S.LinkS onClick={onClick} to="/">
        <S.LoginButtonIn >Войти</S.LoginButtonIn>
        {console.log(user)}
      </S.LinkS>
      <Link to="/registration">
        <S.LoginButtonReg>Зарегестрироваться</S.LoginButtonReg>
      </Link>
    </S.LoginBox>
  );
};