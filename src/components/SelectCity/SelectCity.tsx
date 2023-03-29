import React, { useContext, useEffect } from "react";

import { SelectStyled, OptionStyled } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const SelectCity = () => {
  const { state, city, setCity, fetchCitys, citys } = useContext(SearchContext);

  useEffect(() => {
    if (state) {
      fetchCitys(state);
    }
  }, [state]);

  return (
    <div>
      <SelectStyled
        disabled={state ? false : true}
        onChange={(event) => setCity(event.target.value)}
        value={city}
      >
        <OptionStyled value="">Selecione uma cidade</OptionStyled>
        {citys.map((aCity) => (
          <OptionStyled key={aCity.id} value={aCity.id}>
            {aCity.nome}
          </OptionStyled>
        ))}
      </SelectStyled>
    </div>
  );
};

export default SelectCity;
