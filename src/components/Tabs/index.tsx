import React from 'react';
import TabTitle from './TabTitle';
import { Container, Wrapper, CustomTitle, Flex, Text, IconBox } from './styled';
import { ICONS_MAP } from '../../constants/icons';

interface TabsProps {
  children: React.ReactElement[];
  defaultActiveTab?: string;
  label?: string;
  text?: string;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveTab, label, text, className }) => {
  const defaultActive = children.findIndex((item) => item.props.title === defaultActiveTab);
  const [selectedTab, setSelectedTab] = React.useState(defaultActive >= 0 ? defaultActive : 0);

  const ref = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = React.useCallback((event: React.ChangeEvent<HTMLButtonElement>, index: number) => {
    setSelectedTab(index);
  }, []);

  return (
    <Wrapper className={className}>
      {children[selectedTab]}
      <Container>
        {label && <CustomTitle variant='h2'>{label}</CustomTitle>}
        {text && <Text>{text}</Text>}
        <Flex>
          <IconBox>
            <ICONS_MAP.ArrTab />
          </IconBox>
          {children.map((item, index) => {
            return (
              <div key={index}>
                <TabTitle
                  title={item.props.title}
                  setSelectedTab={event => handleClick(event, index)}
                  activeTab={selectedTab === index}
                  key={index}
                  buttonRefs={(element: HTMLButtonElement | null) => { ref.current[index] = element; }}
                />
              </div>
            );
          })}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Tabs;
