import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Network from './Network';
import Jobs from './Jobs';
import ModalContact from '../../modals/ModalContact';

const MainPage = (): React.ReactElement => {
  const [showModalContact, setShowModalContact] = React.useState(false)
  return (
    <ContentContainer id="main">
      <ModalContact isShow={showModalContact} />
      <ChangeYour onClick={() => setShowModalContact(true)}/>
      <About onClick={() => setShowModalContact(true)} id="about"/>
      <Experience id="exp" onClick={() => setShowModalContact(true)}/>
      <ContactUs id="contact" onClick={() => setShowModalContact(true)}/>
      <Network id="network" />
      <Jobs id="jobs" onClick={() => setShowModalContact(true)}/>
    </ContentContainer>
  );
};

export default MainPage;
