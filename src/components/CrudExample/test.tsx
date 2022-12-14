import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CrudExample } from '.';

describe('<CrudExample />', () => {
  it('should render', () => {
    renderTheme(<CrudExample />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
