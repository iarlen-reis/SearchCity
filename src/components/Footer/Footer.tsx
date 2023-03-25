import React from "react";

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
            <a href="#">API</a>
            <a href="#">Sobre</a>
          </ContactContainer>
          <ContactContainer>
            <a href="#">GitHub</a>
            <a href="#">Linkedin</a>
          </ContactContainer>
        </ContactStyled>
        <DevelopedBy>
          Desenvolvidor por <a href="#">Iarlen Reis</a>
        </DevelopedBy>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
