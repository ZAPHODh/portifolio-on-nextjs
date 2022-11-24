import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 300px;
    height: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: ${theme.colors.white};
    background-color:transparent;
    margin: 0px 20px;
    position: relative;
    flex-shrink: 0;
    &:hover{
      /* background-color: rgba(0,0,0,0.1); */
      border-bottom: ${theme.colors.tertiary} 1px solid;
      transition: all 300ms ease-in-out;
    }
  `}
`;

export const Title = styled.h3`
  ${() => css`
  padding: 0;
  margin: 0;

  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
  position: absolute;
  bottom: 0;
  text-decoration: none;
  padding: 10px 20px;
  background-color: transparent 0%;
  border-radius: 5px;
  margin: 15px;
  color: white;

  &:hover{
    color:${theme.colors.tertiary}
  }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
  /* text-align: center; */
  text-justify: auto;
  color:${theme.colors.mediumGray};
  font-size: 14px;

  `}

`;
