import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Forms } from '.';

describe('<Forms />', () => {
  it('should render', () => {
    renderTheme(<Forms />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
