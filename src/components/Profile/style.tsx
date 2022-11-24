import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${theme.colors.secondaryColor},${theme.colors.primaryColor});
  color: white;
  `}
`;
export const ProfilePic = styled.img`
${() => css`
margin: 10px;
border-radius: 50%;
max-width: 300px;
`}
`;

export const Description = styled.p`
  ${({ theme }) => css`
  padding-left: 20px ;
  padding-right: 20px;
  text-justify: auto;
  color: ${theme.colors.white};
  `}
`;
export const SocialMedia = styled.span`
  ${() => css`
    width: 50px;
    margin: 0;
    padding: 0;
  `}
`;

export const SocialContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    margin:0;
    padding: 0;
  `}
`;
