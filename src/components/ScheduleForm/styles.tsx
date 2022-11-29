import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
  width: 350px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:${theme.colors.primaryColor} ;
  color:${theme.colors.primaryColor};
  height: 700px;
  position: relative;
  margin: 20px;
  transition: all 300ms ease-in-out;
  `}
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
  background: linear-gradient(${theme.colors.secondaryColor},${theme.colors.primaryColor});
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:white;
  `}
`;

export const InputText = styled.input`
 ${({ theme }) => css`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    &[type=number] {
      -moz-appearance:textfield; /* Firefox */
    }
    width: 100%;
    color:${theme.colors.tertiary};
    background: ${theme.colors.mediumGray};
    border: none;
    border-radius: 5px;
    padding: 20px;
    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }
    &:focus{
      outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active{
    /* transition: background-color 5000s ease-in-out 0s; */
    }
    &:-webkit-autofill{
      -webkit-text-fill-color: ${theme.colors.tertiary} !important;


      left:1px;
      top: -3rem;
      color:${theme.colors.mediumGray}
   }
   &:focus
      + ${InputLabel},
      &:not(:placeholder-shown)
      + ${InputLabel},
      &:-webkit-autofill
      + ${InputLabel} {
    filter: none;
    left:1px;
    top: -3rem;
    color:${theme.colors.tertiary}
    }
  `}
`;
export const InputLabel = styled.label`
  ${({ theme }) => css`
  font-size: large;
    position: absolute;
    pointer-events: none;
    color:${theme.colors.primaryColor};
    left:5px;
    top: 16px;
    bottom:50%;
    transition: all 300ms ease-in-out;
  `}
`;
export const InputWrapper = styled.div`
  ${() => css`
    width: 80%;
    position: relative;
    margin: 25px;

  `}
`;
export const ErrorMessage = styled.p`
  ${() => css`
    padding: 10px 20px;
    text-align: justify;
    color:red;
    font-size: 10px;
  `}
`;

export const SubmitButton = styled.input`
  ${({ theme }) => css`

    border: none;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
      background-color: ${theme.colors.mediumGray};
    }
  `}
`;
export const newUser = styled.p`
  ${({ theme }) => css`
  padding:0px 20px;
  color:white;
  font-size: 10px;
  bottom:0;
  text-decoration: underline;
  &:hover{
    cursor: pointer;
    color:${theme.colors.tertiary}
  }
  `}
`;
