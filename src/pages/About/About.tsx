import React from "react";

import { ContainerStyled } from "../../styles/Global";

import AboutImage from "/about/AboutImage.png";

import {
  AboutContainer,
  HeaderStyled,
  UlStyled,
  InfoDetailStyled,
  ApiDetailStyled,
  ImageContainer,
} from "./styles";

function About() {
  return (
    <ContainerStyled>
      <AboutContainer>
        <section>
          <HeaderStyled>
            <h1>SearchCity</h1>
            <p>
              SearchCity é uma aplicação que utiliza as APIs do IBGE para
              encontrar dados relacionados a uma cidade do Brasil.
            </p>
          </HeaderStyled>
          <InfoDetailStyled>
            <h2>Informações adicionais:</h2>
            <p>
              A aplicação foi construida com react utilizando typescript,
              estilizada com styled-components e as requisições as APIs foram
              feitas com Axios.
            </p>
            <p>
              Para gerenciamento de estado foi utilizado o próprio contextAPI do
              react eo roteamento foi feito com react-router-dom na versão 6.9.
            </p>
          </InfoDetailStyled>
          <ApiDetailStyled>
            <h2>APIs utilizadas:</h2>
            <UlStyled>
              <li>
                <a
                  href="https://servicodados.ibge.gov.br/api/docs/localidades"
                  target="_blank"
                  rel="noreferrer"
                >
                  API dos Estados e Cidades
                </a>
              </li>

              <li>
                <a
                  href="https://servicodados.ibge.gov.br/api/docs/malhas?versao=3#api-Malhas-municipiosIdGe"
                  target="_blank"
                  rel="noreferrer"
                >
                  API das malhas (mapas)
                </a>
              </li>
            </UlStyled>
          </ApiDetailStyled>
        </section>
        <ImageContainer>
          <img src={AboutImage} alt="" />
        </ImageContainer>
      </AboutContainer>
    </ContainerStyled>
  );
}

export default About;
