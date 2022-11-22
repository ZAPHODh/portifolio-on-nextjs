import { MenuLink } from 'components/MenuLink';
import * as Styled from './styles';

type LinkType = { children?: string; link?: string; newTab?: boolean };
export type NavLinkProps = {
  links: LinkType[];
};

export const NavLink = ({ links }: NavLinkProps) => {
  return (
    <Styled.Wrapper>
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.Wrapper>
  );
};
