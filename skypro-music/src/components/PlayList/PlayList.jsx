import React from "react";
import * as S from "./PlayListStyles"
import { playLists } from "../../PlayListsAll.js"
import { useContext } from 'react';
import Context from '../../contexts';


const PlayList = () => {
  const { isMainPage } = useContext(Context)

  return (
    <>
      <S.SidebarList>

        {playLists.map((playLista) => (
          <S.SidebarItem key={playLista.id}>
            <S.SidebarLink to={`/category/${playLista.id}`}>
              <S.SidebarImg
                src={playLista.src}
                alt={playLista.name}
              />
            </S.SidebarLink>
          </S.SidebarItem>

        ))}
      </S.SidebarList>

    </>
  );
};

export default PlayList;