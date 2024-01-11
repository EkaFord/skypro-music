import React from "react";
import { Link } from "react-router-dom";
import * as S from "./BurgerMenuStyles"
import { useContext } from 'react';
import Context from '../../contexts';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from "../../store/slices/track";


const { useState } = React;



const BurgerMenu = () => {
  const dispatch = useDispatch();


  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const {  handleLogOut } = useContext(Context)

  return (
    <>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink 
              onClick={()=> {dispatch(getCurrentPage('favorites'))}}
              to="/MyPlaylist">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink onClick={handleLogOut} to="/login">
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </>
  );
};

export default BurgerMenu;