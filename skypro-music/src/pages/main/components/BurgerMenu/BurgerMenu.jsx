import React from "react";
import * as S from "./BurgerMenuStyles"

const { useState } = React;



const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

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
              <S.MenuLink href="#">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </>
  );
};

export default BurgerMenu;