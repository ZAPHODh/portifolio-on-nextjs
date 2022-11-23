import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Projects, ProjectsProps } from '.';

const props: ProjectsProps = {};

describe('<Projects />', () => {
  it('should render', () => {
    renderTheme(<Projects {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
