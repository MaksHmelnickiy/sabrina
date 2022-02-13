import * as React from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Form, Wrapper } from './styled';
import Input from '../../components/Input';
import Chips from '../../components/Chips';

interface IModal {
  isShow: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const data = [
  {
    value: '$5K',
    label: '$5K'
  },
  {
    value: '$5k-$10K',
    label: '$5k-$10K'
  },
  {
    value: '$10K-$20K',
    label: '$10K-$20K'
  },
  {
    value: '$20K',
    label: '$20K'
  },

]

const ModalContact = ({isShow, onClose}: IModal) => {
  const form = React.useRef<any>();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_rcw9ikd', 'template_qf4tla9', form.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      {isShow && 
        <Container className="modal">
          <button onClick={onClose}>Close</button>
          <Wrapper>
            <Box>
              <Form ref={form} onSubmit={sendEmail}>
                <Input type="text" name="user_email" label='Email'/>
                <Input type="text" name="user_name" label='Full Name'/>
                <Input type="text" name="user_name" label='Job Position'/>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </Form>
              <Chips options={data} />
            </Box>
          </Wrapper>
        </Container>
      }
    </>
  );
};
export default ModalContact;