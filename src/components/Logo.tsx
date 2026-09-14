import React from 'react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  imgClassName = 'h-16 sm:h-20 w-auto',
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="NEXE SPECIALSANERING"
        className={`object-contain block ${imgClassName}`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};

export default Logo;
