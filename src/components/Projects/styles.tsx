import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.complementary},${theme.colors.primaryColor});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  `}
`;
export const Container = styled.div`

  ${({ theme }) => css`
    padding: 20px;
    width: 60vw;
    color:white;
    display: flex;
    padding-top:20px ;
    justify-content: space-evenly;
    align-items: center;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
    width: 100vw;
  }
  `}
`;
