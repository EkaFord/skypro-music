import React from "react";
import * as S from "./PlayListStyles"


const PlayList = () => {
  return (
    <S.SidebarItem>
      <S.SidebarLink href="#">
        <S.SidebarImg
          src="img/playlist01.png"
          alt="day's playlist"
        />
      </S.SidebarLink>
    </S.SidebarItem>
  );
};

export default PlayList;