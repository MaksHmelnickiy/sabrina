import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Network from './Network';

const MainPage = (): React.ReactElement => {
  return (
    <ContentContainer>
      <ChangeYour />
      <About />
      <Experience />
      <ContactUs />
      <Network />
    </ContentContainer>
  );
};

export default MainPage;
