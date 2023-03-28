import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;

  background: ${({ theme }) => theme.colors.primary};
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin: 0 auto;
`;

export const ContactStyled = styled.div`
  display: flex;
  gap: 3rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 1.6rem;

    transition: 0.5s;

    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const DevelopedBy = styled.p`
  text-align: center;

  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.white};

  a {
    transition: 0.5s;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
