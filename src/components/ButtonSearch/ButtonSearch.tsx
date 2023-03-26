import React, { useContext } from "react";

import { ButtonStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const ButtonSearch = () => {
  const { city, state } = useContext(SearchContext);

  const handleSubmit = (): void => {
    console.log("Cliquei!");
  };

  return (
    <ButtonStyled
      disabled={state ? (city ? false : true) : true}
      onClick={handleSubmit}
    >
      Buscar Informações
    </ButtonStyled>
  );
};

export default ButtonSearch;
