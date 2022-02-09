import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Text } from './styled';

interface ILogo {
  className?: string 
}

const Logo = ({className}:ILogo): React.ReactElement => {
  return (
    <Container className={className} spy={true} smooth={true} to='main'>
        <ICONS_MAP.CircleIcon />
        <Text>CYM</Text>
    </Container>
  );
};

export default Logo;
