import React from 'react';
import { CustomButton } from './styled';

interface TabTitleProps {
  title: string
  activeTab: boolean
  setSelectedTab: (event: React.ChangeEvent<HTMLButtonElement>) => void
  buttonRefs: (instance: HTMLButtonElement | null) => void
}

const TabTitle: React.FC<TabTitleProps> = ({ title, setSelectedTab, buttonRefs, activeTab }) => {
  const handleTab = React.useCallback((event) => {
    setSelectedTab(event);
  }, [setSelectedTab]);
  return (
    <CustomButton
      activeTab={activeTab}
      type="button"
      onClick={handleTab}
      ref={buttonRefs}
    >
      {title}
    </CustomButton>
  );
};

export default TabTitle;
