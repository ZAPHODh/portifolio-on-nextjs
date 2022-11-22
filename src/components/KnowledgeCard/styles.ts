import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
   background: linear-gradient(${theme.colors.tertiary},${theme.colors.complementary});
   width: 300px ;
   height: 350px;
   border-radius: 5px;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin:20px;
   transition: all 300ms;
   border: none;
  &:hover{
    cursor: pointer;
    background: ${theme.colors.tertiary};
  }
  `}
`;

export const IconImage = styled.img`
${() => css`
width: 150px;

`}`;
