import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalReset from './theme/reset';
import IndexRoute from './routes';
import GlobalFonts from './theme/globalFonts';
import { ThemeProvider } from "styled-components";
import { DarkTheme, GreenTheme, LightTheme } from './constants/colors';

const App = (): React.ReactElement => (
  <BrowserRouter>
    <GlobalReset />
    <GlobalFonts />
    <ThemeProvider theme={DarkTheme}>
      <IndexRoute />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
