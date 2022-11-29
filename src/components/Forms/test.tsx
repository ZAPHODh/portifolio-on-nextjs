import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Forms, FormsProps } from '.';

const props: FormsProps = {};

describe('<Forms />', () => {
  it('should render', () => {
    renderTheme(<Forms {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
