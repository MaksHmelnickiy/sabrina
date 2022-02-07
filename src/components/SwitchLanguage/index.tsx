import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Item } from './styled';

interface IItem {
  value: string;
  label: string;
}

interface ISwitchLanguages {
  languages: IItem[];
  onChange: (item: IItem) => void;
  defaultLang: number;
  className?: string;
}

const SwitchLanguage = ({languages, onChange, className, defaultLang}: ISwitchLanguages) => {
  const [value, setValue] = React.useState(languages[Math.abs(defaultLang)].value);
  return (
    <Container className={className}>
      {languages.map((item, index) => {
        const onClick = () => {
          setValue(item.value);
          onChange(item);
        };

        return (
          <Item value={item.value} selected={item.value === value} onClick={onClick} key={index}>
            {item.value === value ? <ICONS_MAP.Triangle /> : null}
            {item.label}
          </Item>
        )
      })}
    </Container>
  );
};

export default SwitchLanguage;
