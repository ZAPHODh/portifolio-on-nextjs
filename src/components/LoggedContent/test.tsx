import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LoggedContent, LoggedContentProps } from '.';

const props: LoggedContentProps = {};

describe('<LoggedContent />', () => {
  it('should render', () => {
    renderTheme(<LoggedContent {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
