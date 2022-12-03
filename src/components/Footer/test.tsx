import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer, FooterProps } from '.';

const props: FooterProps = {
  title: 'any',
};

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
