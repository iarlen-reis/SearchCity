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
`;

export const OptionStyled = styled.option``;
