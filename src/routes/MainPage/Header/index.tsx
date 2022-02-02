import React from 'react';
import Logo from '../../../components/Logo';
import SwitchLanguage from '../../../components/SwitchLanguage';

import { Container, Item, MenuList, StyledLink } from './styled';

const Header = (): React.ReactElement => {

  return (
    <Container>
      <Logo />
      <MenuList>
        <Item>
          <StyledLink to='/'>Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to='/'>Why Us</StyledLink>
        </Item>
        <Item>
          <StyledLink to='/'>About Us</StyledLink>
        </Item>
        <Item>
          <StyledLink to='/'>Network</StyledLink>
        </Item>
        <Item>
          <StyledLink to='/'>Jobs</StyledLink>
        </Item>
      </MenuList>
      <SwitchLanguage />
    </Container>
  );
};

export default Header;
