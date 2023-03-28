import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 49.5rem;
  padding: 2rem;

  font-size: 1.7rem;
  font-weight: 500;

  outline: none;

  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: 1090px) {
    width: 40rem;
  }

  @media (max-width: 800px) {
    width: 30rem;
  }

  @media (max-width: 680px) {
    width: 40rem;
  }

  @media (max-width: 545px) {
    max-width: 30rem;
    font-size: 1.5rem;
  }

  @media (max-width: 350px) {
    max-width: 25rem;
    font-size: 1.2rem;
  }
`;

export const OptionStyled = styled.option``;
