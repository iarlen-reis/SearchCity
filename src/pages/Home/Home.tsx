import React from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled } from "./styles";

import SelectState from "../../components/SelectState/SelectState";
import SelectCity from "../../components/SelectCity/SelectCity";
import ButtonSearch from "../../components/ButtonSearch/ButtonSearch";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Home</h1>
        <SelectState />
        <SelectCity />
        <ButtonSearch />
      </HomeStyled>
    </ContainerStyled>
  );
};

export default Home;
