import styled from "styled-components";

export const HomeStyled = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-top: 4rem;
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
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 4rem;
`;
