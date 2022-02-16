import React from 'react';
import Logo from '../Logo';
import SwitchLanguage from '../SwitchLanguage';
import {useTranslation} from "react-i18next";
import { availableLanguages } from '../../i18n';
import { Container, Item, MenuList, StyledLink, Wrapper } from './styled';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';


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

  const [shouldHideHeader, setShouldHideHeader] = React.useState(false);
  const [shouldShowShadow, setShouldShowShadow] = React.useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    if(window.innerWidth > 1200){
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowShadow(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    }
  });

  const defaultLanguage = data.findIndex((lang) => {
    return lang.value === i18n.language
  });

  return (
    <Container show={shouldHideHeader} minScroll={shouldShowShadow}>
      <Wrapper>
        <Logo />
        <MenuList>
          <Item>
            <StyledLink spy={true} smooth={true} to='main'>{t('header.home')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='exp'>{t('header.why_us')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} offset={-20} to='about'>{t('header.about_us')}</StyledLink>
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
