import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Icon: React.FC<FontAwesomeIconProps> = ({ icon, ...rest }) => {
  return <FontAwesomeIcon {...rest} icon={icon as IconProp} />;
};
