import React, { useContext, useEffect } from "react";

import { SelectStyled, OptionStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const SelectState = () => {
  const { state, setState, states, fetchStates } = useContext(SearchContext);

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <>
      <SelectStyled
        onChange={(event) => setState(event.target.value)}
        value={state}
      >
        <OptionStyled value="">Selecione um Estado</OptionStyled>
        {states.map((aState) => (
          <OptionStyled key={aState.id} value={aState.id}>
            {aState.nome}
          </OptionStyled>
        ))}
      </SelectStyled>
    </>
  );
};

export default SelectState;
