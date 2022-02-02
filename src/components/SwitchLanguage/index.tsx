import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Item } from './styled';

const SwitchLanguage = (): React.ReactElement => {

  return (
    <Container>
      <Item>DAN</Item>
      <Item>ENG</Item>
    </Container>
  );
};

export default SwitchLanguage;
