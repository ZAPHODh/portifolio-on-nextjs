import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color:${theme.colors.complementary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
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
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
    width: 100vw;
  }
  `}
`;
