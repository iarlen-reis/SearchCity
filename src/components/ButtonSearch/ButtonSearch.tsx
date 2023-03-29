import React, { useContext } from "react";

import { ButtonStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const ButtonSearch = () => {
  const { city, state, fetchCity, loading, cityResult } =
    useContext(SearchContext);

  const handleSubmit = (): void => {
    if (city === String(cityResult.id)) return;

    fetchCity(city);
  };

  return (
    <>
      {loading ? (
        <ButtonStyled disabled={true} onClick={handleSubmit}>
          Buscar Informações
        </ButtonStyled>
      ) : (
        <ButtonStyled
          disabled={state ? (city ? false : true) : true}
          onClick={handleSubmit}
        >
          Buscar Informações
        </ButtonStyled>
      )}
    </>
  );
};

export default ButtonSearch;
