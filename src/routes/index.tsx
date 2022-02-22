import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { DarkTheme, GreenTheme, LightTheme } from '../constants/colors';
import Header from '../components/Header';

import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

import { Container, CustomTitle, Text, Box } from './styled';
import Footer from '../components/Footer';
import Cookie from '../components/Cookies';
import ModalWrapper from '../components/ModalWrapper';
import { useTranslation } from 'react-i18next';


const IndexRoute = (): React.ReactElement => {
  const [theme, setTheme] = React.useState(DarkTheme);
  const [hideCookie, setHideCookie] = React.useState(true)
  const [showPolicyModal, setShowPolicyModal] = React.useState(false)

  const {t} = useTranslation()
  
  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent> ) => {
    const target  = event.target as HTMLElement;
    if(
      target.localName === 'a' ||
      target.localName === 'button' ||
      target.localName === 'input' ||
      target.localName === 'textarea' ||
      target.localName === 'button' ||
      document.querySelector('.modal')
      ){
      return false
    }
    else {
      console.log('yes')
      if(theme === DarkTheme) {
        setTheme(GreenTheme)
      } if(theme === GreenTheme){
        setTheme(LightTheme)
      } if(theme === LightTheme){
        setTheme(DarkTheme)
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container onClick={event => onClick(event)}>
          <Suspense fallback={null}>
            <Route
              render={({ location }) =>
                location.pathname !== "/404" && <Header />
              }
            />
            <Switch>
              <Route component={MainPage} path="/" exact />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
            <Route
              render={({ location }) =>
                location.pathname !== "/404" && <Footer onClickPolicy={() => setShowPolicyModal(true)} />
              }
            />
            <ModalWrapper isShow={showPolicyModal} onClose={() => setShowPolicyModal(false)}>
              <Box>
                <CustomTitle variant='h3' >{t('policy.title.1')}</CustomTitle>
                <Text>{t('policy.text.1')}</Text>
                <CustomTitle variant='h4' >{t('policy.title.2')}</CustomTitle>
                <Text>{t('policy.text.2')}</Text>
                <CustomTitle variant='h4' >{t('policy.title.3')}</CustomTitle>
                <Text>{t('policy.text.3')}</Text>
                <CustomTitle variant='h3' >{t('policy.title.1')}</CustomTitle>
                <Text>{t('policy.text.1')}</Text>
                <CustomTitle variant='h4' >{t('policy.title.2')}</CustomTitle>
                <Text>{t('policy.text.2')}</Text>
                <CustomTitle variant='h4' >{t('policy.title.3')}</CustomTitle>
                <Text>{t('policy.text.3')}</Text>
              </Box>
            </ModalWrapper>
            <Route
              render={({ location }) =>
                location.pathname !== "/404" && <Cookie onClickPolicy={() => setShowPolicyModal(true)} setShow={() => setHideCookie(false)} isShow={hideCookie} />
              }
            />
          </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default IndexRoute;
