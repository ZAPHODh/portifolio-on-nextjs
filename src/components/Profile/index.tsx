import * as Styled from './style';
type socialMedia = {
  redeName: string;
  link: string;
  icon: string;
};

export type ProfileProps = {
  children: React.ReactNode;
  name: string;
  photo?: string;
  description: string;
  socialMedia?: socialMedia[];
};

export const Profile = ({ name, photo, description }: ProfileProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ProfilePic src={photo} alt="Profile pic" />
      <h1>{name}</h1>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
};
