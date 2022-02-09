import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Network from './Network';
import Jobs from './Jobs';

const MainPage = (): React.ReactElement => {
  return (
    <ContentContainer>
      <ChangeYour />
      <About />
      <Experience />
      <ContactUs />
      <Network />
      <Jobs />
    </ContentContainer>
  );
};

export default MainPage;
