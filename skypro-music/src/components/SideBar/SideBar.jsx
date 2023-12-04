import React, { useContext, useEffect } from 'react';
import PlayLists from '../PlayLists/PlayLists';
import * as S from './SideBarStyles';
import Context from '../../contexts';

const SideBar = () => {
  const { handleLogin, user, setUser } = useContext(Context);

  useEffect(() => {
    handleLogin({ user, setUser });
  }, [handleLogin, user, setUser]);

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogOut} to="/login">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <PlayLists />
      </S.SidebarBlock>
    </S.MainSidebar>
  );
};

export default SideBar;
