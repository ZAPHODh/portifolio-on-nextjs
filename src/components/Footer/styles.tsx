import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 100vw;
  background-color: #0001c;
  color:${theme.colors.mediumGray};
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;
