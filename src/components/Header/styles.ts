import styled from "styled-components";

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
`;

export const MenuContainer = styled.div`
  width: 60rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;
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
`;
