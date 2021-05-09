import styled from 'styled-components';

const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const SocialLinksItem = styled.li``;

const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;

const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;

export {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper,
};
