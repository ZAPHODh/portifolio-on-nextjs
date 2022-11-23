import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProjectCard, ProjectCardProps } from '.';

const props: ProjectCardProps = {
  projectName: 'string',
  description: 'string',
  hasSite: false,
  site: 'string',
  github: 'string',
};

describe('<ProjectCard />', () => {
  it('should render projecName', () => {
    renderTheme(<ProjectCard {...props} />);

    expect(screen.getByRole('heading', { name: 'string' })).toBeInTheDocument();
  });
});
