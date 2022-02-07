import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';

const MainPage = (): React.ReactElement => {
  return (
    <ContentContainer>
      <ChangeYour />
      <About />
    </ContentContainer>
  );
};

export default MainPage;
