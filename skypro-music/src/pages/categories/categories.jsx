import React from "react";
import { useParams } from "react-router-dom";
import { playLists } from "../../PlayListsAll.js";
import { useContext } from 'react';
import Context from '../../contexts';

export const Category = () => {

  const { setIsMainPage } = useContext(Context)
  setIsMainPage(false)
  const params = useParams();
  console.log(params)
  const playLista = playLists.find((playLista) => playLista.id === Number(params.id));


  return (
    <>
      <h1>Подборкa {playLista.id}</h1>
    </>
  );
};