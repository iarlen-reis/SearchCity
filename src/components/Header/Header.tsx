import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import { IoLogoGithub } from "react-icons/io";
import { TbApi } from "react-icons/tb";

import {
  HeaderStyled,
  LogoContainer,
  HeaderContainer,
  MenuContainer,
  UlStyled,
} from "./styles";

import Logo from "/LogoContainer.png";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <LogoContainer src={Logo} alt="Logo da página" />
          <MenuContainer>
            <UlStyled>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">Sobre</NavLink>
              </li>
            </UlStyled>
            <UlStyled>
              <li>
                <a href="#">
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <TbApi />
                </a>
              </li>
            </UlStyled>
          </MenuContainer>
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
