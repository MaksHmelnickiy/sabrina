import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { List, Text, IconWrapper, Item } from './styled';

interface IExperienceItem {
  label: React.ReactNode;
  icon: React.ReactElement;
}

interface IExperienceList {
  data: IExperienceItem[];
  className?: string;
}

const ExperienceList = ({className, data}:IExperienceList) => {

  return (
    <List className={className}>

      {data.map((item, index) => {
        return (
          <Item key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            <Text>{item.label}</Text>
            {index === 0 ? <ICONS_MAP.ExpArr1 /> : ''}
            {index === 1 ? <ICONS_MAP.ExpArr2 /> : ''}
            {index === 2 ? <ICONS_MAP.ExpArr3 /> : ''}
          </Item>
        )
      })}
    </List>
  );
};

export default ExperienceList;
