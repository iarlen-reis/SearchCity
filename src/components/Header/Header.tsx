import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

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
          <LogoContainer src={Logo} alt="Logo da página" />
          <MenuContainer mobile={mobile}>
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
