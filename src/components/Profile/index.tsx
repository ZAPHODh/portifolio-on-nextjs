import * as Styled from './style';
type socialMedia = {
  redeName: string;
  link: string;
  icon: string;
};

export type ProfileProps = {
  name: string;
  photo?: string;
  description: string;
  socialMedia?: socialMedia[];
};

export const Profile = ({
  name,
  photo,
  description,
  socialMedia,
}: ProfileProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ProfilePic src={photo} alt="Profile pic" />
      <h1>{name}</h1>
      <Styled.Description>{description}</Styled.Description>
      <Styled.SocialContainer>
        {socialMedia.length > 0
          ? socialMedia.map((each) => (
              <Styled.SocialMedia key={each.redeName}>
                <a href={each.link}>
                  <img
                    src={each.icon}
                    alt={each.redeName}
                    style={{ width: '30px' }}
                    srcSet=""
                  />
                </a>
              </Styled.SocialMedia>
            ))
          : null}
      </Styled.SocialContainer>
    </Styled.Wrapper>
  );
};
