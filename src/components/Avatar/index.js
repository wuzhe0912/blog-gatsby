import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AvatarWrapper } from './style';

const Avatar = () => {
  return (
    <AvatarWrapper>
      <StaticImage src="../../images/profile-photo.jpg" alt="Pitt Wu Avatar" />
    </AvatarWrapper>
  );
};

export default Avatar;
