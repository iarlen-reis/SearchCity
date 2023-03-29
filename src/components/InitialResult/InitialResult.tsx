import React from "react";

import { InitialResultContainer, ImageStyled } from "./styles";

import FlagBrasil from "/home/flagBrasil-2.png";

const InitialResult = () => {
  return (
    <InitialResultContainer>
      <ImageStyled>
        <img src={FlagBrasil} alt="Bandeira do Brasil" />
      </ImageStyled>
    </InitialResultContainer>
  );
};

export default InitialResult;
