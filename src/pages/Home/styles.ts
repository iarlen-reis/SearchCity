import styled from "styled-components";

export const HomeStyled = styled.main`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.9fr 0.9fr;

    gap: 0rem;
  }

  @media (max-width: 545px) {
    grid-template-rows: 0.9fr 0.9fr;

    gap: 0rem;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-top: 4rem;

  @media (max-width: 680px) {
    padding-top: 1rem;
    gap: 2rem;
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  font-weight: bold;

  p {
    font-family: "Itim", cursive;
    font-size: 5rem;

    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1090px) {
    p {
      font-size: 4rem;
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: 3rem;
      max-width: 400px;
    }
  }

  @media (max-width: 680px) {
    p {
      font-size: 4rem;
      max-width: 600px;
    }
  }

  @media (max-width: 545px) {
    p {
      font-size: 3rem;
      max-width: 400px;
    }
  }

  @media (max-width: 350px) {
    p {
      font-size: 2.5rem;
      max-width: 280px;
    }
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media (max-width: 350px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-top: 4rem;

  @media (max-width: 680px) {
    padding-top: 0;
  }
`;
