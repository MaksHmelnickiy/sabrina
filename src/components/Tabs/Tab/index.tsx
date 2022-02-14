import React from 'react';

interface TabProps {
  title: string;
  buttonForm?: React.ReactElement;
  className?: string;
}

const Tab: React.FC<TabProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Tab;
