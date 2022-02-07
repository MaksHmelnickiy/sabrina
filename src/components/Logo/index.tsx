import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Text } from './styled';

const Logo = (): React.ReactElement => {

  return (
    <Container to="/">
        <ICONS_MAP.CircleIcon />
        <Text>CYM</Text>
    </Container>
  );
};

export default Logo;
