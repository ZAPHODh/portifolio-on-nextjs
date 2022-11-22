import * as Styled from './style';

export type ProfileProps = {
  children?: React.ReactNode;
  name?: string;
  photo?: string;
  description?: string;
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
