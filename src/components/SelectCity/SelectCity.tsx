import React, { useContext } from "react";

import { SelectStyled, OptionStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const SelectCity = () => {
  const { state, setCity } = useContext(SearchContext);

  return (
    <div>
      <SelectStyled
        disabled={state ? false : true}
        onChange={(event) => setCity(event.target.value)}
      >
        <OptionStyled>Selecione uma cidade</OptionStyled>
        <OptionStyled value="Salvador">Salvador</OptionStyled>
        <OptionStyled value="Simões filho">Simões filho</OptionStyled>
        <OptionStyled value="Feira de Santana">Feira de Santana</OptionStyled>
      </SelectStyled>
    </div>
  );
};

export default SelectCity;
