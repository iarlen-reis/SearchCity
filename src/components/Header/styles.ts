import styled, { keyframes } from "styled-components";

const menuMobileAnimation = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 0;
    }

`;

export const HeaderStyled = styled.header`
  width: 100%;
  height: 7rem;

  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  margin: 0 auto;
`;

export const LogoContainer = styled.img`
  width: 25rem;

  @media (max-width: 390px) {
    width: 20rem;
  }
`;

interface IMobile {
  mobile: boolean;
}

export const MenuContainer =
  styled.div <
  IMobile >
  `
  width: 60rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  @media (max-width: 900px) {
    width: 50rem;
  }

  @media (max-width: 800px) {
  width: 100%;
  display: ${(props) => (props.mobile ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  position: absolute;

  animation:${menuMobileAnimation} 1s linear;
  gap: 3rem;

  top: 7rem;
  left: 0;
  bottom: 0;

  z-index: 2;

  background: ${({ theme }) => theme.colors.black};
  }
`;

export const UlStyled = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;

  gap: 2rem;
  list-style: none;

  li {
    display: flex;
    height: 100%;
    align-items: center;
  }

  li a {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  li svg {
    font-size: 3rem;
    align-items: center;
  }

  @media (max-width: 800px) {
    height: auto;

    &:not(:nth-child(2)) {
      flex-direction: column;
    }
  }
`;

export const MobileStyled = styled.div`
  display: none;
  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
