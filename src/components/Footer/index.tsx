import * as Styled from './styles';

export type FooterProps = {
  title?: string;
};

export const Footer = ({ title }: FooterProps) => {
  return (
    <Styled.Wrapper>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
