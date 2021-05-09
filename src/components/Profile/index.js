import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './style';
import Avatar from '../Avatar';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>{title}</ProfileAuthor>
        <ProfilePosition>{position}</ProfilePosition>
      </ProfileLink>
      <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  );
};

export default Profile;
