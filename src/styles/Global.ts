import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

        font-family: 'Poppins', sans-serif;
    }

    body {
        background: ${({ theme }) => theme.colors.secundary};
    }

    html {
        font-size: 62.5%;
    }

    li a.active {
        padding: 0.5rem;

        font-weight: 600;
        color: ${({ theme }) => theme.colors.tertiary};
        background: ${({ theme }) => theme.colors.secundary};
    }

`;

export const ContainerStyled = styled.main`
  max-width: 1200px;
  width: 100%;
  height: 90vh;

  padding: 1rem;
  margin: 0 auto;
`;
