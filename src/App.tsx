import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalReset from './theme/reset';
import IndexRoute from './routes';
import GlobalFonts from './theme/globalFonts';


const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <GlobalReset />
      <GlobalFonts />
      <IndexRoute />
    </BrowserRouter>
  )};

export default App;
