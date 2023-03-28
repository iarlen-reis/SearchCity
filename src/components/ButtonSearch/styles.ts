import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 25rem;
  padding: 1rem;

  font-size: 1.6rem;
  font-weight: 500;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: 0.5s;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  &:hover {
    background: rgba(0, 0, 0, 1);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.45);
    cursor: unset;
  }

  @media (max-width: 1090px) {
    width: 20rem;
    font-size: 1.4rem;
  }

  @media (max-width: 680px) {
    width: 25rem;
    font-size: 1.5rem;
  }

  @media (max-width: 545px) {
    max-width: 20rem;
    font-size: 1.2rem;
  }
`;
