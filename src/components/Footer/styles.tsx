import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 100vw;
  background-color: #333333;
  color:${theme.colors.mediumGray};
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;
