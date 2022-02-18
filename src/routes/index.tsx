import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { DarkTheme, GreenTheme, LightTheme } from '../constants/colors';
import Header from '../components/Header';

import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

import { Container } from './styled';
import Footer from '../components/Footer';
import Cookie from '../components/Cookies';

const IndexRoute = (): React.ReactElement => {
  const [hide, setHide] = React.useState(true)
  const [theme, setTheme] = React.useState(DarkTheme);
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
            <Header />
            <Switch>
              <Route component={MainPage} path="/" exact />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
            <Cookie onClickPolicy={() => console.log('ddd')} setShow={() => setHide(false)} isShow={hide} />
            <Footer />
          </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default IndexRoute;
