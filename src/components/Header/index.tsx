import React from 'react';
import Logo from '../Logo';
import SwitchLanguage from '../SwitchLanguage';
import {useTranslation} from "react-i18next";
import { availableLanguages } from '../../i18n';
import { Container, Item, MenuList, StyledLink, Wrapper } from './styled';


const data = [
  
  {
    value: availableLanguages[1],
    label: 'DAN'
  },
  {
    value: availableLanguages[0],
    label: 'ENG'
  },
  
]

const Header = (): React.ReactElement => {
  const {t, i18n} = useTranslation()

  const defaultLanguage = data.findIndex((lang) => {
    return lang.value === i18n.language
  });

  return (
    <Container>
      <Wrapper>
        <Logo />
        <MenuList>
          <Item>
            <StyledLink spy={true} smooth={true} to='main'>{t('header.home')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='about'>{t('header.why_us')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} offset={-20} to='exp'>{t('header.about_us')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='contact'>{t('header.network')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='jobs'>{t('header.jobs')}</StyledLink>
          </Item>
        </MenuList>
        <SwitchLanguage defaultLang={defaultLanguage} languages={data} onChange={(e) => i18n.changeLanguage(e.value)} />
      </Wrapper>
    </Container>
  );
};

export default Header;
