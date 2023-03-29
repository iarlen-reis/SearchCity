import React, { useContext } from "react";

import { ButtonStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const ButtonSearch = () => {
  const { city, state, fetchCity } = useContext(SearchContext);

  const handleSubmit = (): void => {
    fetchCity(city);
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
