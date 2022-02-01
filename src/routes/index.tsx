import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './MainPage';

import { Container } from './styled';

const IndexRoute = (): React.ReactElement => {

  return (
    <Container>
        <Suspense fallback={null}>
          <Switch>
            <Route component={MainPage} path="/" exact />
          </Switch>
        </Suspense>
    </Container>
  );
};

export default IndexRoute;
