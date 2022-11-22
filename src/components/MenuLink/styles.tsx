import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color:${theme.colors.white};
    display: block;
    padding: ${theme.spacings.small};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background: ${theme.colors.tertiary};
      transition:  all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }

  `}
`;
