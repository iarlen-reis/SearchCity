import React from "react";

import { ContainerStyled } from "../../styles/Global";

import {
  HomeStyled,
  InfoContainer,
  TitleStyled,
  SelectorContainer,
  ImageContainer,
} from "./styles";

import SelectState from "../../components/SelectState/SelectState";
import SelectCity from "../../components/SelectCity/SelectCity";
import ButtonSearch from "../../components/ButtonSearch/ButtonSearch";

import ResultCity from "../../components/ResultCity/ResultCity";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <InfoContainer>
          <TitleStyled>
            <p>Encontre informações sobre Cidades do Brasil.</p>
          </TitleStyled>
          <SelectorContainer>
            <SelectState />
            <SelectCity />
            <ButtonSearch />
          </SelectorContainer>
        </InfoContainer>
        <ImageContainer>
          <ResultCity />
        </ImageContainer>
      </HomeStyled>
    </ContainerStyled>
  );
};

export default Home;
