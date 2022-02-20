import React from 'react';
import { ContentContainer } from './styled';
import ChangeYour from './ChangeYour';
import About from './About';
import Experience from './Experience';
import ContactUs from './ContactUs';
import Network from './Network';
import Jobs from './Jobs';
import ModalWrapper from '../../components/ModalWrapper';
import emailjs from '@emailjs/browser';
import { Form, Wrapper, CustomTabs, CustomButton } from './styled';
import Input from '../../components/Input';
import Chips from '../../components/Chips';
import FileUploadButton from '../../components/FileUploadButton';
import Tab from '../../components/Tabs/Tab';
import Textarea from '../../components/Textarea';

const data = [
  {
    value: '$5K',
    text: '$5K'
  },
  {
    value: '$5k-$10K',
    text: '$5k-$10K'
  },
  {
    value: '$10K-$20K',
    text: '$10K-$20K'
  },
  {
    value: '$20K',
    text: '$20K'
  },

]

const MainPage = (): React.ReactElement => {
  const [showModalContact, setShowModalContact] = React.useState(false)
  const formCandidate = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const formCompany = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const [val, setVal] = React.useState('');

  const sendEmailCandidate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    emailjs.sendForm('service_rcw9ikd', 'template_qf4tla9', formCandidate.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then(() => {
        setShowModalContact(false)
      }, (error) => {
          console.log(error.text);
      });
  };

  const sendEmailCompany = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_e4ucrho', 'template_45jmp9c', formCompany.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then(() => {
        setShowModalContact(false)
      }, (error) => {
          console.log(error.text);
      });
  };

  const changeValue = React.useCallback((e) => {
    setVal(e)
  },[])
  
  return (
    <ContentContainer id="main">
      <ModalWrapper onClose={() => setShowModalContact(false)} isShow={showModalContact}>
        <Wrapper>
          <CustomTabs
            label='Contact Us'
            text='In this section I want to show some of my partners I work with and recommend'
          >
            <Tab title="Candidate">
              <Form className="form-candidate" ref={formCandidate} onSubmit={sendEmailCandidate}>
                <Input type="text" name="user_email" label='Email' />
                <Input type="text" name="user_name" label='Full Name' />
                <Input type="text" name="user_job" label='Job Position' />
                {val !== undefined && <input type="text" hidden name="user_salary" value={val} onChange={e => setVal(e.target.value)} />}
                <Chips onChange={e => changeValue(e?.value)} options={data} label='Expected Salary' />
                <FileUploadButton />
                <CustomButton onClick={sendEmailCandidate} arrowPosition='bottom' arrowShort>Send a request</CustomButton>
              </Form>
            </Tab>
            <Tab title="Company">
              <Form className="form-company" ref={formCompany} onSubmit={sendEmailCompany}>
                <Input type="text" name="user_company" label='Company Name' />
                <Input type="text" name="user_job" label='Job Position' />
                <Input type="text" name="user_email" label='E-mail' />
                <Textarea name='message' label='Supportive text (Optional)' />
                <CustomButton onClick={sendEmailCompany} arrowPosition='bottom' arrowShort>Send a request</CustomButton>
              </Form>
            </Tab>
          </CustomTabs>
        </Wrapper>
      </ModalWrapper>
      <ChangeYour onClick={() => setShowModalContact(true)} />
      <About onClick={() => setShowModalContact(true)} id="about" />
      <Experience id="exp" onClick={() => setShowModalContact(true)} />
      <ContactUs id="contact" onClick={() => setShowModalContact(true)} />
      <Network id="network" />
      <Jobs id="jobs" onClick={() => setShowModalContact(true)} />
    </ContentContainer>
  );
};

export default MainPage;
