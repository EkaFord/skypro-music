import React from "react";
import PlayLists from "../PlayLists/PlayLists";
import * as S from "./SideBarStyles"


const SideBar = () => {

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Ekaterina Ford</S.SidebarPersonalName>
        <S.SidebarIcon>
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