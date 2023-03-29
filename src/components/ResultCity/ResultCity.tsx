import React, { useContext } from "react";

import { InfoContainer, ImageStyled, InfoStyled, UlContainer } from "./styles";

import { SearchContext } from "../../contexts/SearchContext";

const ResultCity = () => {
  const { cityResult } = useContext(SearchContext);
  console.log(cityResult);
  return (
    <InfoContainer>
      <ImageStyled>
        <h1>{cityResult.nome}</h1>
        <img
          src={`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${cityResult.id}`}
          alt={cityResult.nome}
        />
      </ImageStyled>
      <InfoStyled>
        <h2>Informações:</h2>
        <UlContainer>
          <ul>
            <li>
              <span>ID:</span> {cityResult.id}
            </li>
            <li>
              <span>Nome:</span> {cityResult.nome}
            </li>
            <li>
              <span>UF:</span> {cityResult.microrregiao.mesorregiao.UF.sigla}
            </li>
          </ul>
          <ul>
            <li>
              <span>Região ID:</span>{" "}
              {cityResult.microrregiao.mesorregiao.UF.regiao.id}
            </li>
            <li>
              <span>Região:</span>{" "}
              {cityResult.microrregiao.mesorregiao.UF.regiao.nome}
            </li>
          </ul>
          <ul>
            <li>
              <span>Mesorregiao ID:</span>{" "}
              {cityResult.microrregiao.mesorregiao.id}
            </li>
            <li>
              <span>Mesorregiao:</span>{" "}
              {cityResult.microrregiao.mesorregiao.nome}
            </li>
          </ul>
        </UlContainer>
      </InfoStyled>
    </InfoContainer>
  );
};

export default ResultCity;
