import React from "react";

import { InfoContainer, ImageStyled, InfoStyled, UlContainer } from "./styles";

const ResultCity = () => {
  return (
    <InfoContainer>
      <ImageStyled>
        <h1>Rio de Janeiro</h1>
        <img
          src="https://servicodados.ibge.gov.br/api/v3/malhas/municipios/3304557"
          alt="Rio de janeiro"
        />
      </ImageStyled>
      <InfoStyled>
        <h2>Informações:</h2>
        <UlContainer>
          <ul>
            <li>
              <span>ID:</span> 2927408
            </li>
            <li>
              <span>Nome:</span> Salvador
            </li>
            <li>
              <span>UF:</span> BA
            </li>
          </ul>
          <ul>
            <li>
              <span>Região ID:</span> 2
            </li>
            <li>
              <span>Região:</span> Nordeste
            </li>
          </ul>
          <ul>
            <li>
              <span>Mesorregiao ID:</span> 2905
            </li>
            <li>
              <span>Mesorregiao:</span> Metropolitana de Salvador
            </li>
          </ul>
        </UlContainer>
      </InfoStyled>
    </InfoContainer>
  );
};

export default ResultCity;
