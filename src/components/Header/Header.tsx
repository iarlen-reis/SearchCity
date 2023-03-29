import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

import { IoLogoGithub } from "react-icons/io";
import { TbApi } from "react-icons/tb";

import {
  HeaderStyled,
  LogoContainer,
  HeaderContainer,
  MenuContainer,
  UlStyled,
  MobileStyled,
} from "./styles";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import Logo from "/LogoContainer.png";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Link to="/">
            <LogoContainer src={Logo} alt="Logo da página" />
          </Link>
          <MenuContainer mobile={mobile}>
            <UlStyled>
              <li>
                <NavLink to="/" onClick={() => setMobile(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMobile(false)}>
                  Sobre
                </NavLink>
              </li>
            </UlStyled>
            <UlStyled>
              <li>
                <a
                  href="https://github.com/iarlen-reis/SearchCity"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://servicodados.ibge.gov.br/api/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbApi />
                </a>
              </li>
            </UlStyled>
          </MenuContainer>
          <MobileStyled>
            {!mobile ? (
              <RiMenu3Line onClick={() => setMobile(!mobile)} />
            ) : (
              <RiCloseLine onClick={() => setMobile(!mobile)} />
            )}
          </MobileStyled>
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
