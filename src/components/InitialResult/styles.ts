import styled from "styled-components";

export const InitialResultContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 400px;
  }

  @media (max-width: 910px) {
    img {
      height: 350px;
    }
  }

  @media (max-width: 800px) {
    img {
      height: 300px;
    }
  }

  @media (max-width: 680px) {
    padding-top: 4rem;
    padding-bottom: 4rem;

    img {
      height: 350px;
    }
  }

  @media (max-width: 450px) {
    padding-top: 4rem;

    img {
      height: 280px;
    }
  }

  @media (max-width: 350px) {
    padding-top: 4rem;

    img {
      height: 250px;
    }
  }
`;
