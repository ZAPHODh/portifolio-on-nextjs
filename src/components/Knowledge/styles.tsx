import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  width: 100%;
  background-color:${theme.colors.primaryColor};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  `}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    background-color  : ${theme.colors.primaryColor} ;
    color:white;
    margin: 0;
    padding:0;
    padding-top: 50px;
    text-align: center;
  `}

`;
