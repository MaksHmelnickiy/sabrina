import React from 'react';
import {useTranslation} from "react-i18next";

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  StyledButton,
  CustomTitle,
  Box,
  Description,
  BoxText,
  Image
} from './styled';

const ContactUs = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <>
      <Container>
        <CustomTitle variant='h2'>{t('contact.title')}</CustomTitle>
        <Text>{t('contact.text')}</Text>
        <Box>
          <ICONS_MAP.SnowFlake />
          <Description>{t('contact.description')}</Description>
          <BoxText>{t('contact.offer')}</BoxText>
        </Box>
      </Container>
      <Image>
        <StyledButton arrowPosition='top' arrowShort>{t('contact.button')}</StyledButton>
      </Image>
    </>
  );
};

export default ContactUs;
