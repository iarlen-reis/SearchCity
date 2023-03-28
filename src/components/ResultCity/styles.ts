import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;
`;

export const ImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 2.5rem;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 1090px) {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 100%;
      height: 150px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.8rem;
    }

    img {
      width: 100%;
      height: 130px;
    }
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 2rem;
      padding: 1rem;
    }

    img {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 545px) {
    h1 {
      font-size: 2rem;
      padding: 1rem;
    }

    img {
      width: 100%;
      height: 150px;
    }
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const UlContainer = styled.div`
  display: flex;
  gap: 5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    span {
      color: ${({ theme }) => theme.colors.tertiary};

      display: block;
    }

    @media (max-width: 1090px) {
      font-size: 1.3rem;
    }
  }
`;
