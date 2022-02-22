import React from 'react';
import Logo from '../Logo';
import SwitchLanguage from '../SwitchLanguage';
import {useTranslation} from "react-i18next";
import { availableLanguages } from '../../i18n';
import { Container, Gamburger, Item, MenuList, OverflowMenu, StyledLink, Wrapper } from './styled';
import Fade from 'react-reveal/Fade';
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
        <Fade>
          <Logo />
        </Fade>
        <OverflowMenu showMenu={showMenu}>
          <MenuList>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='main'><Fade delay={100}>{t('header.home')}</Fade></StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='exp'><Fade delay={200}>{t('header.why_us')}</Fade></StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} offset={-20} to='about'><Fade delay={300}>{t('header.about_us')}</Fade></StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='contact'><Fade delay={400}>{t('header.network')}</Fade></StyledLink>
            </Item>
            <Item>
              <StyledLink spy={true} onClick={() => setShowMenu(false)} smooth={true} to='jobs'><Fade delay={500}>{t('header.jobs')}</Fade></StyledLink>
            </Item>
          </MenuList>
        </OverflowMenu>
        <SwitchLanguage showOnMobile={showMenu} defaultLang={defaultLanguage} languages={data} onChange={(e) => i18n.changeLanguage(e.value)} />
        <Gamburger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}><ICONS_MAP.Menu/></Gamburger>
      </Wrapper>
    </Container>
  );
};

export default Header;
