import { MenuLink } from 'components/MenuLink';
import * as Styled from './styles';

export type LinkType = { name: string; link: string; newTab: false };
export type NavLinkProps = {
  links: LinkType[];
};

export const NavLink = ({ links }: NavLinkProps) => {
  return (
    <Styled.Wrapper>
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link}>
          {link.name}
        </MenuLink>
      ))}
    </Styled.Wrapper>
  );
};
