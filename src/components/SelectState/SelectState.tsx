import React, { useState } from "react";

import { SelectStyled, OptionStyled } from "./styles";

const SelectState = () => {
  const [state, setState] = useState<string>("");

  return (
    <SelectStyled onChange={(event) => setState(event.target.value)}>
      <OptionStyled>Selecione um Estado</OptionStyled>
      <OptionStyled value="Bahia">Bahia</OptionStyled>
    </SelectStyled>
  );
};

export default SelectState;
