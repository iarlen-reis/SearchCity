import React from "react";

import { ContainerStyled } from "../../styles/Global";

import { HomeStyled } from "./styles";

import SelectState from "../../components/SelectState/SelectState";
import SelectCity from "../../components/SelectCity/SelectCity";

const Home = () => {
  return (
    <ContainerStyled>
      <HomeStyled>
        <h1>Home</h1>
        <SelectState />
        <SelectCity />
      </HomeStyled>
    </ContainerStyled>
  );
};

export default Home;
