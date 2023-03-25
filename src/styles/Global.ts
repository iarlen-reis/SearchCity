import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

        font-family: 'Poppins', sans-serif;
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
