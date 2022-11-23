import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
   width: 49vw ;
   height: 350px;
   border-radius: 5px;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: all 300ms;
   border: none;
   padding: 0;
   margin: 0;
   opacity: 0.8;
  &:hover{
    cursor: pointer;
    background: rgba(0,0,0,0.1);
    opacity: 1;
  }

  @media ${theme.media.lteMedium} {
    width: 90vw ;
  }
  `}
`;

export const IconImage = styled.img`
${() => css`
width: 64px;

`}`;
