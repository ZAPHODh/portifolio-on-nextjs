import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LoginForm, LoginFormProps } from '.';

const props: LoginFormProps = {};

describe('<LoginForm />', () => {
  it('should render', () => {
    renderTheme(<LoginForm {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
