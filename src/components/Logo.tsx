import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtext?: boolean;
  showIcon?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const heightMap = {
    sm: 'h-12 sm:h-14',
    md: 'h-16 sm:h-20',
    lg: 'h-20 sm:h-24',
    xl: 'h-24 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="NEXE SPECIALSANERING"
        className={`w-auto ${heightMap[size]} object-contain block transition-transform duration-200`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
