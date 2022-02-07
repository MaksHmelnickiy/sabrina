import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { DarkTheme, GreenTheme, LightTheme } from '../constants/colors';
import Header from '../components/Header';

import MainPage from './MainPage';

import { Container } from './styled';

const IndexRoute = (): React.ReactElement => {
  const [theme, setTheme] = React.useState(DarkTheme);
  const onClick = (event: any ) => {
    console.log(event.target.childNodes)
    if(
      event.target.localName === 'a' ||
      event.target.localName === 'button' ||
      event.target.localName === 'input' ||
      event.target.localName === 'textarea' ||
      event.target.lacelName === 'button'
      ){
      return false
    }
    else {
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
            </Switch>
          </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default IndexRoute;
