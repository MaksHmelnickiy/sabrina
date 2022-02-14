import * as React from 'react';
import emailjs from '@emailjs/browser';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Form, Wrapper, Close, CustomTabs, CustomButton } from './styled';
import Input from '../../components/Input';
import Chips from '../../components/Chips';
import FileUploadButton from '../../components/FileUploadButton';
import Tab from '../../components/Tabs/Tab';
import Textarea from '../../components/Textarea';

interface IModal {
  isShow: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

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

const ModalContact = ({isShow, onClose}: IModal) => {
  const formCandidate = React.useRef<any>();
  const formCompany = React.useRef<any>();
  const [show, setShow] = React.useState<boolean>(false)
  const [val, setVal] = React.useState('');
  const sendEmailCandidate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_rcw9ikd', 'template_qf4tla9', formCandidate.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const sendEmailCompany = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_e4ucrho', 'template_45jmp9c', formCompany.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
  };
  const changeValue = React.useCallback((e) => {
    setVal(e)
  },[])
  return (
    <>
      {isShow && 
        <Container className="modal">
          <Close onClick={onClose}><ICONS_MAP.Close /></Close>
          <Wrapper>
            <CustomTabs 
              label='Contact Us'
              text='In this section I want to show some of my partners I work with and recommend'
            >
              <Tab title="Candidate">
                <Form ref={formCandidate} onSubmit={sendEmailCandidate}>
                  <Input type="text" name="user_email" label='Email'/>
                  <Input type="text" name="user_name" label='Full Name'/>
                  <Input type="text" name="user_job" label='Job Position'/>
                  {val !== undefined && <input type="text" hidden name="user_salary" value={val} onChange={e => setVal(e.target.value)} />}
                  <Chips onChange={e => changeValue(e?.value)} options={data} label='Expected Salary' />
                  <FileUploadButton />
                  <CustomButton onClick={sendEmailCandidate} arrowPosition='bottom' arrowShort>Send a request</CustomButton>
                </Form>
              </Tab>
              <Tab title="Company">
                <Form ref={formCompany} onSubmit={sendEmailCompany}>
                  <Input type="text" name="user_company" label='Company Name'/>
                  <Input type="text" name="user_job" label='Job Position'/>
                  <Input type="text" name="user_email" label='E-mail'/>
                  <Textarea name='message' label='Supportive text (Optional)' />
                  <CustomButton onClick={sendEmailCompany} arrowPosition='bottom' arrowShort>Send a request</CustomButton>
                </Form>
              </Tab>
            </CustomTabs>
          </Wrapper>
        </Container>
      }
    </>
  );
};
export default ModalContact;