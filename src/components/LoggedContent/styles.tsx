import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  padding-top: 50px;
  background: linear-gradient(${theme.colors.secondaryColor},${theme.colors.primaryColor});
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:white;
  padding: 30px;
  `}
`;
export const LogoutButton = styled.button`
  ${({ theme }) => css`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
      background-color: ${theme.colors.mediumGray};
    }
  `}
`;
