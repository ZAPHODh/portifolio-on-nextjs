import * as Styled from './styles';

export type ProjectCardProps = {
  projectName: string;
  description: string;
  github: string;
};
export const ProjectCard = ({
  description,
  github,
  projectName,
}: ProjectCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{projectName}</Styled.Title>
      <Styled.Paragraph>{description}</Styled.Paragraph>
      <Styled.Link href={github} target="_blank" rel="noopener noreferrer">
        Repositório do projeto
      </Styled.Link>
    </Styled.Wrapper>
  );
};
