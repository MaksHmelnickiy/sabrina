import * as React from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form } from './styled';


interface MyFormValues {
  name: any,
  email: any,
}

interface IModal {
  isShow: boolean;
}

const ModalContact = ({isShow}: IModal) => {
  const form = React.useRef<any>();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_rcw9ikd', 'template_qf4tla9', form.current, 'user_qG7tG1JMI4lTtZkA9TI5V')
      .then((result:any) => {
          console.log(result.text);
      }, (error:any) => {
          console.log(error.text);
      });
  };
  return (
    <>
      {isShow && 
        <Container>
          <h1>My Example</h1>
          <Form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </Form>
        </Container>
      }
    </>
  );
};
export default ModalContact;