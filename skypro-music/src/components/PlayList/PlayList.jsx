import React from "react";
import * as S from "./PlayListStyles"
import { playLists } from "../../PlayListsAll.js"
import { useDispatch } from "react-redux";
import { getFilterOff } from "../../store/slices/track.js";


const PlayList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.SidebarList>

        {playLists.map((playLista) => (
          <S.SidebarItem key={playLista.id}>
            <S.SidebarLink to={`/category/${playLista.id}`} onClick={()=>{dispatch(getFilterOff())}}>
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