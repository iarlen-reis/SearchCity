import styled, { keyframes } from "styled-components";

const imageAnimation = keyframes`
    0% {
        top: 5%;
    }
    50% {
        top: 20%;
    }
    100% {
        top: 5%;
    }
`;

export const AboutContainer = styled.main`
  display: flex;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 4rem;

  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 4rem;
    font-family: "Itim", sans-serif;

    color: ${({ theme }) => theme.colors.tertiary};
  }

  p {
    max-width: 70rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const InfoDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  margin-top: 3rem;

  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 3.2rem;
    font-family: "Itim", sans-serif;

    color: ${({ theme }) => theme.colors.tertiary};
  }

  p {
    max-width: 70rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const ApiDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  h2 {
    font-size: 3.2rem;
    font-family: "Itim", sans-serif;

    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li a {
    font-size: 2rem;

    transition: 0.5s;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;

  img {
    position: absolute;
    width: 100%;

    animation: ${imageAnimation} 10s ease-in-out infinite;
  }
`;
