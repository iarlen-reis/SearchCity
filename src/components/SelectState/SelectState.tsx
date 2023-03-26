import React, { useContext } from "react";

import { SelectStyled, OptionStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const SelectState = () => {
  const { state, setState } = useContext(SearchContext);

  return (
    <SelectStyled
      onChange={(event) => setState(event.target.value)}
      value={state}
    >
      <OptionStyled>Selecione um Estado</OptionStyled>
      <OptionStyled value="Bahia">Bahia</OptionStyled>
    </SelectStyled>
  );
};

export default SelectState;
