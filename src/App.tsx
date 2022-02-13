import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalReset from './theme/reset';
import IndexRoute from './routes';
import GlobalFonts from './theme/globalFonts';
import { mailer } from './node';


const App = (): React.ReactElement => {
  const onSend = () => {
    mailer.send('WelcomeEmail', { firstName: 'Mathieu' }, {
      to: 'my@email.com'
    })
  }
  return (
    <BrowserRouter>
      <button onClick={onSend}>Heeeee</button>
      <GlobalReset />
      <GlobalFonts />
      <IndexRoute />
    </BrowserRouter>
  )};

export default App;
