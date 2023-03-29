import React from "react";

import { Link } from "react-router-dom";
import {
  FooterStyled,
  FooterContainer,
  ContactStyled,
  ContactContainer,
  DevelopedBy,
} from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <ContactStyled>
          <ContactContainer>
            <a
              href="https://servicodados.ibge.gov.br/api/docs"
              target="_blank"
              rel="noreferrer"
            >
              API
            </a>
            <Link to="/about">Sobre</Link>
          </ContactContainer>
          <ContactContainer>
            <a
              href="https://github.com/iarlen-reis"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iarlen-reis/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </ContactContainer>
        </ContactStyled>
        <DevelopedBy>
          Desenvolvidor por{" "}
          <a
            href="https://github.com/iarlen-reis"
            target="_blank"
            rel="noreferrer"
          >
            Iarlen Reis
          </a>
        </DevelopedBy>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
