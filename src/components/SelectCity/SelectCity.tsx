import React, { useState } from "react";

import { SelectStyled, OptionStyled } from "./styles";

const SelectCity = () => {
  const [city, setCity] = useState<string>();

  return (
    <SelectStyled onChange={(event) => setCity(event.target.value)}>
      <OptionStyled>Selecione uma cidade</OptionStyled>
      <OptionStyled value="Salvador">Salvador</OptionStyled>
      <OptionStyled value="Simões filho">Simões filho</OptionStyled>
      <OptionStyled value="Feira de Santana">Feira de Santana</OptionStyled>
    </SelectStyled>
  );
};

export default SelectCity;
