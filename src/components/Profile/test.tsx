import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Profile, ProfileProps } from '.';

const props: ProfileProps = {
  children: '',
  name: '',
  photo: '',
  description: '',
};

describe('<Profile />', () => {
  it('should render name', () => {
    renderTheme(<Profile {...props} name="Test" />);

    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
  });
  it('should render description', () => {
    renderTheme(<Profile {...props} description="Test" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should render photo', () => {
    renderTheme(<Profile {...props} photo="Test" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
