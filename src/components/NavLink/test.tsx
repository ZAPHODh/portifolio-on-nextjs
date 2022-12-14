import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink, NavLinkProps } from '.';
import { Mock } from './Mock';

const props: NavLinkProps = {
  links: [{ link: 'link', newTab: false, name: 'any' }],
};

describe('<NavLink />', () => {
  it('should render all MenuLinks', () => {
    renderTheme(<NavLink {...props} links={Mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(Mock.length);
  });
  it('should not render all MenuLinks', () => {
    renderTheme(<NavLink {...props} />);
    expect(screen.getAllByRole('link')).toHaveLength(0);
  });
  it('should match snapshot ', () => {
    const { container } = renderTheme(<NavLink {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
