import { ProjectCard, ProjectCardProps } from 'components/ProjectCard';
import * as Styled from './styles';

export type ProjectsProps = {
  ProjectCardApi?: ProjectCardProps[];
};

export const Projects = ({ ProjectCardApi = [] }: ProjectsProps) => {
  return (
    <Styled.Wrapper>
      <h2>Projetos</h2>
      <Styled.Container>
        {ProjectCardApi.length > 0
          ? ProjectCardApi.map((card) => (
              <ProjectCard
                description={card.description}
                github={card.github}
                projectName={card.projectName}
                key={card.projectName}
              ></ProjectCard>
            ))
          : 'There is nothing yet'}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
