import React from 'react';
import Links from './Links';
import {
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './style';

const MenuLinks = () => {
  return (
    <MenuLinksWrapper>
      <MenuLinksList>
        {Links.map((link, i) => (
          <MenuLinksItem key={i}>
            <MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  );
};

export default MenuLinks;
