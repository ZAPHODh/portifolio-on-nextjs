import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  width: 100%;
  background:linear-gradient(${theme.colors.primaryColor},${theme.colors.complementary});
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: space-evenly;
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
