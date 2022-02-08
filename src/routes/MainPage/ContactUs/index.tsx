import React from 'react';
import {useTranslation} from "react-i18next";

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  IconWrapper,
  StyledButton,
  CustomTitle
} from './styled';

const ContactUs = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <Container>
      {/* <IconWrapper><ICONS_MAP.Plain /></IconWrapper> */}
      <CustomTitle variant='h2'>You or your team have a tricky position to fill?</CustomTitle>
      <Text>Finding the right talent in the market has become an Tesealmost insurmountable task, especially in the field of tech and digitalisation.</Text>

      {/* <StyledButton>Contact Us</StyledButton> */}
    </Container>
  );
};

export default ContactUs;
