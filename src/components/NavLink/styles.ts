import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color:${theme.colors.secondaryColor};

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      justify-content: center;
      display: none;
    }
  `}
`;
