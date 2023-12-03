import React from 'react';
import * as ReactIcons from 'react-icons';

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
}

const IconComponent: React.FC<IconProps> = ({ icon, size = 30, color = 'black' }) => {
  const Icon = (ReactIcons as any)[icon];
  if (!Icon) return null;

  return <Icon size={size} color={color} />;
};

export default IconComponent;
