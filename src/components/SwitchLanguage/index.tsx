import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Item } from './styled';
import Fade from 'react-reveal/Fade';

interface IItem {
  value: string;
  label: string;
}

interface ISwitchLanguages {
  languages: IItem[];
  onChange: (item: IItem) => void;
  defaultLang: number;
  className?: string;
  showOnMobile?: boolean;
}

const SwitchLanguage = ({languages, onChange, className, showOnMobile, defaultLang}: ISwitchLanguages) => {
  const [value, setValue] = React.useState(languages[Math.abs(defaultLang)].value);
  return (
    <Container showOnMobile={showOnMobile} className={className}>
      {languages.map((item, index) => {
        const onClick = () => {
          setValue(item.value);
          onChange(item);
        };

        return (
          <Item value={item.value} selected={item.value === value} onClick={onClick} key={index}>
              {item.value === value ? <ICONS_MAP.Triangle /> : null}
            <Fade delay={600}>
              {item.label}
            </Fade>
          </Item>
        )
      })}
    </Container>
  );
};

export default SwitchLanguage;
