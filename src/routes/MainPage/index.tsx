import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';
import Experience from './Experience';
import ContactUs from './ContactUs';

const MainPage = (): React.ReactElement => {
  return (
    <ContentContainer>
      <ChangeYour />
      <About />
      <Experience />
      <ContactUs />
    </ContentContainer>
  );
};

export default MainPage;
