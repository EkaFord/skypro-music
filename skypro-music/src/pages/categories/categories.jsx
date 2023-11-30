import React from "react";
import { useParams } from "react-router-dom";
import { playLists } from "../../PlayListsAll.js";

export const Category = () => {
  const params = useParams();
  console.log(params);
  const playLista = playLists.find(
    (playLista) => playLista.id === Number(params.id)
  );

  return (
    <div>
      <h1>Подборкa {playLista.id}</h1>
    </div>
  );
};
