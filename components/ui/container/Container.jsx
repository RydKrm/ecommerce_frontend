import React from 'react';

const Container = ({ children, variant = 'default', className = '' }) => {
  const variantList = {
    default: 'container mx-auto',
    center: 'flex flex-row items-center justify-center',
  };

  return (
    <div className={`${variantList[variant]} ${className}`}>{children}</div>
  );
};

export default Container;

export const FlexRow = ({ children, className = '' }) => {
  return <div className={`flex flex-row gap-3 ${className}`}>{children}</div>;
};

export const FlexCol = ({ children, className }) => {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
};
