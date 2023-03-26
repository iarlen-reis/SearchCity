import React, { useContext } from "react";

import { SelectStyled, OptionStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const SelectState = () => {
  const { setState } = useContext(SearchContext);

  return (
    <SelectStyled onChange={(event) => setState(event.target.value)}>
      <OptionStyled>Selecione um Estado</OptionStyled>
      <OptionStyled value="Bahia">Bahia</OptionStyled>
    </SelectStyled>
  );
};

export default SelectState;
