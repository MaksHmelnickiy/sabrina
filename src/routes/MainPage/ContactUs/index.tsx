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

interface Props {
  id?: string;
}

const ContactUs = ({id}:Props): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <>
      <Container id={id}>
        <CustomTitle variant='h2'>{t('contact.title')}</CustomTitle>
        <Text>{t('contact.text')}</Text>
        <Box>
          <ICONS_MAP.SnowFlake />
          <Description>{t('contact.description')}</Description>
          <BoxText>{t('contact.offer')}</BoxText>
        </Box>
      </Container>
      <Image>
        <StyledButton variant='tertiary' arrowDark>{t('contact.button')}</StyledButton>
      </Image>
    </>
  );
};

export default ContactUs;
