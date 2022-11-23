import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  max-width:80%;
  min-width: 350px;
  /* background-color: ${theme.colors.complementary}; */
  position: relative;
  border-radius: 10px 0px 10px 10px;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
  `}
`;

export const Btn = styled.button`
  ${({ theme }) => css`
  background-color:${theme.colors.complementary} ;
  color: ${theme.colors.tertiary};
  border: none;
  padding: 5px;
  border-radius: 0 5px 5px 0px;
  position: absolute;
  top: 0;
  right: -1.6rem;

  &:hover{
    color:white;
    cursor: pointer;
  }
  `}
`;

export const KnowledgeContainer = styled.div`
  ${({ theme }) => css`
  padding: 10px;
  margin: 20px;
  max-width  :80% ;
  min-width: 300px;
  color:${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;

export const KnowledgeIcon = styled.img`
${() => css`
  width: 80px;
  margin: 10px
`}
`;

export const ProgressBar = styled.div`
  border-radius: 10px;
  width: 200px;
  margin-bottom: 30px;
  background-color: white;
  height: 10px;
  position: relative;
`;
