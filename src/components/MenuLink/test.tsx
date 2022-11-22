import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink, MenuLinkProps } from '.';

const props: MenuLinkProps = {
  children: '',
  link: '',
  newTab: false,
};

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={false} {...props}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should open a link in a new tab', () => {
    renderTheme(
      <MenuLink {...props} link="https://localhost" newTab={true}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={false} {...props}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' }))
      .toMatchInlineSnapshot(`
      .c0 {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #FFFFFF;
        display: block;
        padding: 1.6rem;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.5rem;
        left: 50%;
        width: 0%;
        height: 0.2rem;
        background: #8E7524;
        -webkit-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href=""
        target="_self"
      >
        Children
      </a>
    `);
  });
});
