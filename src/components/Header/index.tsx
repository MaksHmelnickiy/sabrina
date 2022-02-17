import React from 'react';
import Logo from '../Logo';
import SwitchLanguage from '../SwitchLanguage';
import {useTranslation} from "react-i18next";
import { availableLanguages } from '../../i18n';
import { Container, Gamburger, Item, MenuList, OverflowMenu, StyledLink, Wrapper } from './styled';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';
import { ICONS_MAP } from '../../constants/icons';


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
  const [shouldShowBg, setShouldShowBg] = React.useState(false);

  const [showMenu, setShowMenu] = React.useState(false);

  const MINIMUM_SCROLL = 120;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    if(window.innerWidth > 1024){
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowBg(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    }
  });

  const defaultLanguage = data.findIndex((lang) => {
    return lang.value === i18n.language
  });

  return (
    <Container show={shouldHideHeader} minScroll={shouldShowBg}>
      <Wrapper>
        <Logo />
        <OverflowMenu showMenu={showMenu}>
          <MenuList>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='main'>{t('header.home')}</StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='exp'>{t('header.why_us')}</StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} offset={-20} to='about'>{t('header.about_us')}</StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='contact'>{t('header.network')}</StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='jobs'>{t('header.jobs')}</StyledLink>
            </Item>
          </MenuList>
        </OverflowMenu>
        <SwitchLanguage defaultLang={defaultLanguage} languages={data} onChange={(e) => i18n.changeLanguage(e.value)} />
        <Gamburger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}><ICONS_MAP.Menu/></Gamburger>
      </Wrapper>
    </Container>
  );
};

export default Header;
