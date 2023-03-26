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
`;
