import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CrudExample, CrudExampleProps } from '.';

const props: CrudExampleProps = {
  children: 'any',
};

describe('<CrudExample />', () => {
  it('should render', () => {
    renderTheme(<CrudExample {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
