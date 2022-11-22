import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  max-width:80%;
  background-color: ${theme.colors.complementary};
  `}
`;
