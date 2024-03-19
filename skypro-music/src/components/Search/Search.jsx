import React, { useEffect, useState } from "react";
import * as S from "./SearchStyles.js"
import { useDispatch, useSelector } from "react-redux";
import { getFilterAuthorArr } from "../../store/slices/track.js";


const Layout = () => {
  const [disableda, setDisableda] = useState(false)
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.track.currentPage)
  useEffect(()=>{
  if (currentPage === 'favorites' || currentPage === 'category') {
    setDisableda(true)
  } else if (currentPage === 'main') {
    setDisableda(false)
  }
  },[currentPage])
  // if (currentPage === 'favorites' || currentPage === 'category') {
  //   setDisableda(true)
  // }
  return (
    <S.CenterblockSearch>
      <S.SearchSvg >
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        $color={disableda}
        // disabled={disabled}
        onChange={(event) => {
          dispatch(getFilterAuthorArr({ searchInput: event.target.value }))
        }}
      />
    </S.CenterblockSearch>
  );
};

export default Layout;