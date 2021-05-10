import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuLinksWrapper = styled.nav``;

const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: #1fa1f2;
  }
`;

const MenuLinksLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;

export { MenuLinksWrapper, MenuLinksList, MenuLinksItem, MenuLinksLink };
